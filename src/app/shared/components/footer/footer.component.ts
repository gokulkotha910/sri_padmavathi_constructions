import { Component } from '@angular/core';
import { COMPANY, SERVICES } from '../../../core/data/company-data';

@Component({ selector: 'app-footer', templateUrl: './footer.component.html', styleUrls: ['./footer.component.css'] })
export class FooterComponent {
  company = COMPANY;
  services = SERVICES.slice(0, 4);
  year = new Date().getFullYear();
}
