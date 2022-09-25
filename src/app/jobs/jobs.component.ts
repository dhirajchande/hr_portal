import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  joblist: any;
  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers'
  };

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get("https://demo.club360.page/api/jobs").subscribe( (data: any) => {
	console.log(data);
	this.joblist = data;
})

  }

}
