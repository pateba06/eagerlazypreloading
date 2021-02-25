import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {
  persons = [
    { code: 1, name: "Ajeet" },
    { code: 2, name: "Chandan" },
    { code: 3, name: "Rahul" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
