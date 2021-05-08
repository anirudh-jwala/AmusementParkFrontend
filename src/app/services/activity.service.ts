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
  // For adding new customer
  data: Object | undefined;
 
  //Http Post User
  RegisterNewActivity(body:any): any{
    console.log("inside RegisterNewUser() of RegistrationService");
    const headers = { 
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    this.httpService.post<any>(this.remoteurl,
      JSON.stringify(body),{'headers':headers})
    .subscribe((data: Object | undefined) => {
      this.data = data;
      //this.loading = false;
    });
  }

  delete(activityId :number){
    // location.reload();
    console.log("inside Deleteactivity() of DeleteActivityservice");
    return this.httpService.delete("http://localhost:8899/api/activity/"+activityId);
  }

  update(body:any): any{
    console.log("Inside service update()");
    const headers = { 
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    return this.httpService.put("http://localhost:8899/api/activity",body,{'headers':headers});
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
