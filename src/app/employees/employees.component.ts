import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery'


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers'
  };


  employeeList: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    console.log($('table'));

    // $('table').dataTable();

  //   let table = new DataTable('#example', {
  //     // options
  // });


    this.httpClient.get("https://demo.club360.page/api/employees").subscribe(data => {
      console.log(data);
      this.employeeList = data;
    })


  }

}
