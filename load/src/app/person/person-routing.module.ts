import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonlistComponent } from './personlist/personlist.component';

const routes: Routes = [
  {
    // path:'person',component:PersonComponent, children:
    path:'',component:PersonComponent, children: //we removed person as we alredy given in root routing
    [
      {path:'personlist',component:PersonlistComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {
 constructor (){ console.log("Person Routing File loaded");}
 }
