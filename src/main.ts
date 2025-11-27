import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HeroComponent } from './app/hero/hero.component';
import { AboutComponent } from './app/about/about.component';
import { SkillsComponent } from './app/skills/skills.component';
import { ProjectsComponent } from './app/projects/projects.component';
import { ContactComponent } from './app/contact/contact.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `
})
export class App {}

bootstrapApplication(App).catch(err => {
  // Log bootstrap errors (helps diagnose DI errors like NG0201 during production)
  // Keep a clear stack trace and rethrow so the process still surfaces the failure.
  console.error('bootstrapApplication error:', err && err.message ? err.message : err);
  console.error(err);
  throw err;
});
