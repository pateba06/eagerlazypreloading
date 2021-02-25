import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonlistComponent } from './personlist/personlist.component';
import { PersonComponent } from './person.component';


@NgModule({
  declarations: [PersonlistComponent,PersonComponent],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule {
  constructor(){
        console.log("Person Module loaded !!");
      }
 }
