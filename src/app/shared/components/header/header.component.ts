import { Component, HostListener } from '@angular/core';
import { COMPANY } from '../../../core/data/company-data';

@Component({ selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.css'] })
export class HeaderComponent {
  company = COMPANY;
  menuOpen = false;
  navItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Services', link: '/services' },
    { label: 'Projects', link: '/projects' },
    { label: 'Leadership', link: '/leadership' },
    { label: 'Contact', link: '/contact' }
  ];
  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
  @HostListener('document:keydown.escape') onEscape() { this.menuOpen = false; }
}
