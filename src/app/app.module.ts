import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobFormComponent } from './job-form/job-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    JobsComponent,
    JobFormComponent,
    AddNewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
