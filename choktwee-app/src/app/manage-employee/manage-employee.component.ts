import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../class/employee';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.sass']
})
export class ManageEmployeeComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: any = {};

  emps: Employee[];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.refreshList();
    // this.dtOptions = {
    //   dom: 'Bfrtip',
    //   ajax: this.service.list,
    //   buttons: [
    //     {
    //       text: 'เพิ่มพนักงาน',
    //       key: '1',
    //       action: (e, dt, node, config) => {
    //         alert('Button activated');
    //       }
    //     }
    //   ]
    // };
    this.dataTable.DataTable();
  }

}
