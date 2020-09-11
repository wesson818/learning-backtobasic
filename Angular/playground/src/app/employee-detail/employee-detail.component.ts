import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
 
  public employees = [];
  public employeeId;
  public errorMsg:string;

  constructor(private _employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id')) || "";
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')) || "";
      this.employeeId = id;
    // this.employees = this._employeeService.getEmployees()
    this._employeeService.getEmployees()
        .subscribe(data => {
          if(id!=""){
            this.employees = data.filter(d => {
              return d.id === id
            })
          }else{
            this.employees = data
          }
        },error => this.errorMsg = error)
    })
  }

  goPrevious() {
    let previousId = this.employeeId - 1;
    this.router.navigate(['/employeeDetail',previousId])
  }

  goNext() {
    let nextId = this.employeeId + 1;
    this.router.navigate(['/employeeDetail',nextId])
  }
}
