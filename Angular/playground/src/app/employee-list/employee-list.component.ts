import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees = []
  public errorMsg: string;

  constructor(private _employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees()
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                   error => this.errorMsg = error)
  }

  onClick(employee) {
    this.router.navigate(['/employeeDetail', employee.id])
  }

}
