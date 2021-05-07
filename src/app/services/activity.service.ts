import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  // GET - for all activities
  remoteurl: string = 'http://localhost:8899/api/activity';

  constructor(private httpService: HttpClient) {}

  // Get Remote activities
  GetAllActivities(): Observable<Activity> {
    return this.httpService
      .get<Activity>(this.remoteurl)
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
