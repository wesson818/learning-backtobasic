import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/employees.json";

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(
      // eg. "map" without a dot before
      // map(data => {
      //   return data;
      // }),
      // "catchError" instead "catch"
      catchError(error => {
        return Observable.throw("Server Error");
      })
    );
  }
}

