import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
  
  jobTitle = new FormControl('');
  minSalary = new FormControl('');


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  saveJob() {
    console.log(this.jobTitle.value);

    this.httpClient.post("https://demo.club360.page/api/jobs", {
      "job_title": this.jobTitle.value,
      "min_salary": this.minSalary.value
    }).subscribe( r => {
      console.log(r);
    })
  }

}
