import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-black mb-12">
          About <span class="text-accent">Me</span>
        </h2>
        <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div class="flex justify-center">
            <img
              src="assets/officepicture.jpg.jpg"
              alt="Chidiogo at work"
              class="rounded-lg shadow-xl w-full max-w-md object-cover"
            />
          </div>
          <div class="space-y-6">
           <p class="text-lg text-gray-700 leading-relaxed">
  I'm a passionate <strong>Frontend Developer</strong> with over <strong>3 years of experience</strong>
  building modern, responsive, and user-friendly web applications. My journey into tech began with a
  degree in Economics from the University of Port Harcourt, where I developed strong analytical and 
  data-driven problem-solving skills—strengths that now shape how I build and optimize digital experiences.
</p>

            <p class="text-lg text-gray-700 leading-relaxed">
              I specialize in <strong>Angular 16-20, TypeScript, React, TailwindCSS, NGRX, Bootstrap, HTML, CSS,
              and Ant Design</strong>. I have worked with reputable organizations both locally and internationally,
              and I'm active on Upwork, open to short and long-term contracts.
            </p>
            <div class="grid grid-cols-2 gap-4 pt-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-bold text-2xl text-accent">3+</h4>
                <p class="text-gray-600">Years Experience</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-bold text-2xl text-accent">4+</h4>
                <p class="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
