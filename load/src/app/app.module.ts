import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule } from './app-routing.module';
import { CustompreloadService } from './custompreload.service';
// import { PersonRoutingModule } from './person/person-routing.module';
// import { CompanyRoutingModule } from './company/company-routing.module';
// import { PersonModule } from './person/person.module';
// import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PersonRoutingModule,
    // CompanyRoutingModule,
    // PersonModule,
    // CompanyModule
  ],
  providers: [CustompreloadService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App Module Loaded");
  }
 }
