// Simple Vercel serverless endpoint to forward contact form submissions to SendGrid
// Environment variables required on Vercel:
// SENDGRID_API_KEY and TO_EMAIL (destination email)

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const body = req.body || {};
  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const message = (body.message || '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const SENDGRID_KEY = process.env.SENDGRID_API_KEY;
  const TO_EMAIL = process.env.TO_EMAIL;
  const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@mypholio.app';

  if (!SENDGRID_KEY || !TO_EMAIL) {
    console.error('Missing SENDGRID_API_KEY or TO_EMAIL environment variable');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const payload = {
    personalizations: [
      {
        to: [{ email: TO_EMAIL }],
        subject: `New contact message from ${name}`
      }
    ],
    from: { email: FROM_EMAIL, name: 'myPholio Contact' },
    content: [
      {
        type: 'text/plain',
        value: `You received a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      }
    ]
  };

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('SendGrid responded with error', response.status, text);
      return res.status(500).json({ error: 'Failed to send email', details: text });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Unexpected error sending email', err);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
};
