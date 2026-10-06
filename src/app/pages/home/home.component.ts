import { Component } from '@angular/core';
import { CompanyDataService } from '../../core/services/company-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  company = this.data.getCompany();
  services = this.data.getServices();
  projects = this.data.getProjects().filter(p => p.featured).slice(0, 3);
  activeCategory = 'All';
  categories = ['All', 'New Construction', 'Upgradation', 'Tender Works', 'Private Works'];
  constructor(private data: CompanyDataService) { }
  filteredProjects() {
    return this.activeCategory === 'All' ? this.projects : this.data.getProjects().filter(p =>
      p.category === this.activeCategory).slice(0, 3);
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }
}
