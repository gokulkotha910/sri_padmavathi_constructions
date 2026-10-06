import { Injectable } from '@angular/core';
import { COMPANY, PROJECTS, SERVICES } from '../data/company-data';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class CompanyDataService {
  getCompany() { return COMPANY; }
  getServices() { return SERVICES; }
  getProjects(): Project[] { return PROJECTS; }
  getProjectBySlug(slug: string): Project | undefined { return PROJECTS.find(project => project.slug === slug); }
}
