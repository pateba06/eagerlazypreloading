import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanylistComponent } from './companylist/companylist.component';

const routes: Routes = [
  {
    // path: 'company', component: CompanyComponent, children: 
    path: '', component: CompanyComponent, children: [
    
      { path: 'companylist', component: CompanylistComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { 
  constructor (){ console.log("company Routing File loaded");}
}
