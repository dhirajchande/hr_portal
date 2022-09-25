import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss']
})
export class AddNewEmployeeComponent implements OnInit {
firstName = new FormControl('');
lastName = new FormControl('');

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.httpClient.post("https://demo.club360.page/api/employees",{
    "first_name":this.firstName.value,
    "last_name":this.lastName.value,
    "email": "dhirajchande@gmail.com",
    "hire_date":"1987-06-17",
    "job_id":"4",
    "salary":"100"
  }).subscribe(r=>{
    console.log(r)
  }

  )
  }

}
