import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
// import { PersonComponent } from './person/person.component';
// import { CompanyComponent } from './company/company.component';
import { CustompreloadService } from './custompreload.service';


const routes:Routes=[
{path:'contactus',component:ContactusComponent},
// {path:'person',component:PersonComponent},
// {path:'company',component:CompanyComponent},
//lazy loading --we use loadchildren
// {path:'company',loadChildren:()=>import('../app/company/company.module').then(m=>m.CompanyModule) },
// {path:'person',loadChildren:()=>import('../app/person/person.module').then(m=>m.PersonModule)}
//custom loading
{ path: 'company',  loadChildren: () => import('../app/company/company.module').then(m => m.CompanyModule), data: { preload1: true, delay:true}},
  { path: 'person', loadChildren: () => import('../app/person/person.module').then(m => m.PersonModule), data: { preload1: false } },

];



@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  // imports:[RouterModule.forRoot(routes)],
  //NO pre-loading
  //imports:[RouterModule.forRoot(routes,{preloadingStrategy:NoPreloading})],
  // imports:[RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  imports:[RouterModule.forRoot(routes,{preloadingStrategy:CustompreloadService})],
  exports:[RouterModule]
})
export class AppRoutingModule { 
  constructor (){ console.log("app-Routing File loaded");}
}
