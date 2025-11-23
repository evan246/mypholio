import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div class="container mx-auto px-6 py-20">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 animate-fade-in">
            <h2 class="text-5xl md:text-6xl font-bold text-black leading-tight">
              Hi, I'm <span class="text-accent">Chidiogo</span>
            </h2>
            <h3 class="text-3xl md:text-4xl font-semibold text-gray-700">
              Frontend Developer
            </h3>
            <p class="text-lg text-gray-600 leading-relaxed"> 
              Here you go — short, clean, and with **University of Port Harcourt** spelled out:

---

I'm a Frontend Developer with 3+ years of experience 
 building modern and user-focused web applications. 
  I'm a graduate of the University of Port Harcourt, 
   and my Economics background strengthens 
    my analytical and data-driven approach 
     to solving problems in tech. 
      I specialize in Angular 16-20, TypeScript, React, TailwindCSS, and NGRX, and I've worked with reputable organizations locally and internationally. I'm active on Upwork and open to new opportunities.

            </p>
            <div class="flex flex-wrap gap-4">
              <a
                href="#contact"
                class="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition shadow-lg hover:shadow-xl"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                class="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl"
              >
                View Projects
              </a>
              <!-- <a
                href="assets/Copy of CHIDIOGO (1).pdf"
                download
                class="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition"
              >
                Download CV
              </a> -->
            </div>
          </div>
          <div class="flex justify-center">
            <div class="relative">
              <div class="absolute -inset-4 bg-accent opacity-20 rounded-full blur-2xl"></div>
              <img
                src="assets/Generated Image September 24, 2025 - 6_10PM.png"
                alt="Chidiogo Evangeline Anetoh"
                class="relative rounded-full w-80 h-80 object-cover shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }
  `]
})
export class HeroComponent {}
