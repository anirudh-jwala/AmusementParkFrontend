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

  getCartItems(): any {
    const cartItems = window.sessionStorage.getItem('cartItems');

    if (cartItems) {
      return JSON.parse(cartItems);
    } else {
      return {};
    }
  }

  addToCart(activity) {
    if (sessionStorage.getItem('cartItems')) {
      this.activities = JSON.parse(sessionStorage.getItem('cartItems'));
    }
    this.activities.push(activity);
    sessionStorage.setItem('cartItems', JSON.stringify(this.activities));

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
