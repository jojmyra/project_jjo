import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly url = 'http://localhost:3000/api/employee';

  constructor(private http: HttpClient) {}
  list: Employee[];

  refreshList() {
    this.http.get<Employee[]>(`${this.url}/all`).toPromise().then(res => this.list = res as Employee[]);
  }


}