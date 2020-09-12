import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private _url = "http://localhost:3000/enroll";

  constructor(private _http: HttpClient) { }
  
  register(UserData) {
    return this._http.post<any>(this._url, UserData);
  } 

  errorHandler(error: HttpErrorResponse) {
    return throwError(error); 
  }
}
