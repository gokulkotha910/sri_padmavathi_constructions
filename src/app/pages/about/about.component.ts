import { Component } from '@angular/core'; import { CompanyDataService } from '../../core/services/company-data.service';
@Component({selector:'app-about', templateUrl:'./about.component.html', styleUrls:['./about.component.css']}) export class AboutComponent { company=this.data.getCompany(); constructor(private data:CompanyDataService){} }
