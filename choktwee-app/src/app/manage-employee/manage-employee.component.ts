import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service'
import { Employee } from '../class/employee'


@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.sass']
})
export class ManageEmployeeComponent implements OnInit {

  emps: Employee[]

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.refreshList()
  }

}
