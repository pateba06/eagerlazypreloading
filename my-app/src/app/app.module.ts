import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { AppRoutingModule } from './app-routing.module';
import { PersonModule } from './person/person.module';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
   PersonModule,
   CompanyModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

constructor(){
  console.log("App Module Test Loaded")
}

}
