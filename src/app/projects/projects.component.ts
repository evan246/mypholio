import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-black mb-12">
          My <span class="text-accent">Projects</span>
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div *ngFor="let project of projects" class="bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden transform hover:-translate-y-2">
            <div class="p-6 space-y-4">
              <h3 class="text-2xl font-bold text-black">{{ project.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tech of project.technologies" class="px-3 py-1 bg-accent text-white text-sm rounded-full">
                  {{ tech }}
                </span>
              </div>
              <div class="flex flex-wrap gap-4 pt-4">
                <a
                  *ngIf="project.liveLink"
                  [href]="project.liveLink"
                  target="_blank"
                  class="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition"
                >
                  View Live
                </a>
                <a
                  *ngIf="project.githubLink"
                  [href]="project.githubLink"
                  target="_blank"
                  class="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                > 
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Account Linking App',
      description: 'A secure account linking and card activation interface with real-time validation and clean UI.',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      liveLink: 'https://accountlinking-f9lpneadm-anetoh-evangeline-chidiogos-projects.vercel.app/card-inventory/card-activation',
      githubLink: ''
    },
    {
      title: 'Banking application',
      description: 'A modern digital banking dashboard featuring authentication, transfers, analytics, and users management.',
      technologies: ['React', 'TypeScript', 'Bootstrap'],
      liveLink: 'http://banking-jvsgr247s-anetoh-evangeline-chidiogos-projects.vercel.app',
      githubLink: ''
    },
    {
      title: 'Loch Scientific',
      description: 'Corporate website for an oil servicing company with professional UI, service pages, and animations.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      liveLink: 'https://lochscientific.vercel.app/',
      githubLink: ''
    },
    {
      title: 'My Next Project Here',
      description: 'A placeholder for My upcoming project. This space is ready for My next amazing work.',
      technologies: ['Angular', 'React', 'TypeScript'],
      liveLink: '',
      githubLink: ''
    }
  ];
}
