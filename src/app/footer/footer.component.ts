import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-black text-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400">
            &copy; {{ currentYear }} Chidiogo Evangeline Anetoh. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <a
              href="https://github.com/evan246"
              target="_blank"
              class="text-gray-400 hover:text-accent transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anetoh-chidiogo-5912aa214"
              target="_blank"
              class="text-gray-400 hover:text-accent transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:anetohevangeline47@gmail.com"
              class="text-gray-400 hover:text-accent transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
