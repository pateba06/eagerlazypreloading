import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {

  companys = [
        { code: 1001, name: "HCL" },
        { code: 1002, name: "TCS" },
        { code: 1003, name: "Nokia" }
      ];

  constructor() { }

  ngOnInit(): void {
  }

}
