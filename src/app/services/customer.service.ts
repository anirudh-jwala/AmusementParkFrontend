import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url : string  = 'http://localhost:8899/customer';
  customer : Customer  =  new Customer();

  constructor(private httpService : HttpClient) { }

  GetCustomer() :  Observable<Customer>{
    return this.httpService.get<Customer>(this.url)
      .pipe(retry(1), catchError(this.myerrorhandler))
  }

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
