import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-black mb-12">
          My <span class="text-accent">Skills</span>
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div *ngFor="let skill of skills" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center space-y-4">
            <div class="text-5xl">{{ skill.icon }}</div>
            <h3 class="font-semibold text-lg text-center text-black">{{ skill.name }}</h3>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  skills = [
    { name: 'Angular 16-20', icon: '🅰️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'React', icon: '⚛️' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'TailwindCSS', icon: '💨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'NGRX', icon: '🔄' },
    { name: 'vanilla javascript', icon: '🐜' },
    { name: 'Git & GitHub', icon: '🔧' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'Responsive Design', icon: '📱' }
  ];
}
