import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';

import { CompanylistComponent } from './companylist/companylist.component';
import { CompanyComponent } from './company.component';


@NgModule({
  declarations: [CompanylistComponent,CompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { 
   constructor(){
        console.log("CompanyModule loaded !!");
      }
    
}
