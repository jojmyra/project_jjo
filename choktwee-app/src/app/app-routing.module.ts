import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { AddEmployeeComponent } from './manage-employee/add-employee/add-employee.component';

const routes: Routes = [
  { path: 'manage-employee', 
  component: ManageEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
