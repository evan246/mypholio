import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 w-full bg-white shadow-md z-50">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-black">Chidiogo</h1>
        <ul class="hidden md:flex space-x-8">
          <li><a href="#home" class="text-gray-700 hover:text-accent transition">Home</a></li>
          <li><a href="#about" class="text-gray-700 hover:text-accent transition">About</a></li>
          <li><a href="#skills" class="text-gray-700 hover:text-accent transition">Skills</a></li>
          <li><a href="#projects" class="text-gray-700 hover:text-accent transition">Projects</a></li>
          <li><a href="#contact" class="text-gray-700 hover:text-accent transition">Contacts</a></li>
        </ul>
        <button
          (click)="toggleMenu()"
          class="md:hidden text-black"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div *ngIf="menuOpen" class="md:hidden bg-white border-t">
        <ul class="flex flex-col space-y-4 px-6 py-4">
          <li><a href="#home" (click)="toggleMenu()" class="text-gray-700 hover:text-accent transition">Home</a></li>
          <li><a href="#about" (click)="toggleMenu()" class="text-gray-700 hover:text-accent transition">About</a></li>
          <li><a href="#skills" (click)="toggleMenu()" class="text-gray-700 hover:text-accent transition">Skills</a></li>
          <li><a href="#projects" (click)="toggleMenu()" class="text-gray-700 hover:text-accent transition">Projects</a></li>
          <li><a href="#contact" (click)="toggleMenu()" class="text-gray-700 hover:text-accent transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
