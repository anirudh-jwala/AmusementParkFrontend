import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  activities: Activity[];

  itemsInCartSubject: BehaviorSubject<Activity[]> = new BehaviorSubject([]);

  constructor() {
    this.itemsInCartSubject.subscribe((_) => (this.activities = _));
  }

  addToCart(activity) {
    if (localStorage.getItem('cartItems')) {
      this.activities = JSON.parse(localStorage.getItem('cartItems'));
    }
    this.activities.push(activity);
    localStorage.setItem('cartItems', JSON.stringify(this.activities));

    this.itemsInCartSubject.next([...this.activities, activity]);
  }

  getActivities(): Observable<Activity[]> {
    return this.itemsInCartSubject;
  }

  clearCart() {
    this.activities = [];
    return this.activities;
  }
}
