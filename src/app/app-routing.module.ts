import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { JobFormComponent } from './job-form/job-form.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {path:"employees", component:EmployeesComponent},
  {path:"jobs", component:JobsComponent},
  {path:"jobform", component:JobFormComponent},
  {path:"addNewEmployee", component:AddNewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
