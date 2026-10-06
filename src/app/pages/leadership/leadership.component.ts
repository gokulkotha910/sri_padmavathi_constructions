import { Component } from '@angular/core'; 
import { CompanyDataService } from '../../core/services/company-data.service'; 

@Component({ 
    selector: 'app-leadership', 
    templateUrl: './leadership.component.html', 
    styleUrls: ['./leadership.component.css'] 
}) 
export class LeadershipComponent { 
    company = this.data.getCompany(); 
    constructor(private data: CompanyDataService) { } 
}
