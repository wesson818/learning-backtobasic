import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {}
  
  getEmployees() {
    return [
      {"id":1, "name":"Peter", "age": 30},
      {"id":2, "name":"John", "age": 35},
    ]
  }
  
}
