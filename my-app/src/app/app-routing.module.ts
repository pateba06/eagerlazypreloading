import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';



const routes: Routes = [
//  { path: '', redirectTo: 'contactus', pathMatch: 'full' },
  { path: 'contactus', component: ContactUsComponent }  
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
