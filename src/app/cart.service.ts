import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activity } from './models/activity';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // constructor() { }

  activities: Activity[] = [];

  itemsInCartSubject: BehaviorSubject<Activity[]> = new BehaviorSubject([]);
 constructor() {
    this.itemsInCartSubject.subscribe(_ => this.activities = _);
  }

  addToCart(activity) {
    console.log("Inside CartService addtoCart")
    // this.activities.push(activity);
    this.itemsInCartSubject.next([...this.activities, activity]);
  }

  getActivities(): Observable<Activity[]> {
    // return this.activities;
    return this.itemsInCartSubject;
  }

  clearCart() {
    this.activities = [];
    return this.activities;
  }

}
