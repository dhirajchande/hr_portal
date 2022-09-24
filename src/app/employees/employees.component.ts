import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employeeList: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {


    this.httpClient.get("https://demo.club360.page/api/employees").subscribe(data => {
      console.log(data);
      this.employeeList = data;
    })


  }

}
