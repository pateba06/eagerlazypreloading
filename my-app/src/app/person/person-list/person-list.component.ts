import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons = [
    { code: 1, name: "Ajeet" },
    { code: 2, name: "Chandan" },
    { code: 3, name: "Rahul" }
    ];
    
  constructor() { }

  ngOnInit(): void {
  }

}
