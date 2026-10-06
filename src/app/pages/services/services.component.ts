import { Component } from '@angular/core'; import { CompanyDataService } from '../../core/services/company-data.service';
@Component({selector:'app-services',templateUrl:'./services.component.html',styleUrls:['./services.component.css']}) export class ServicesComponent { services=this.data.getServices(); constructor(private data:CompanyDataService){} }
