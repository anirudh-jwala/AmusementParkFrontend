import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  // GET - for all activities
  remoteurl: string = 'http://localhost:8899/api/customer';

  constructor(private httpService: HttpClient) {}

  // Get Remote activities
  GetAllCustomers(): Observable<Customer> {
    return this.httpService
      .get<Customer>(this.remoteurl)
      .pipe(retry(1), catchError(this.myerrorhandler));
  }

  // Error handling
  myerrorhandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
