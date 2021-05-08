import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { Activity } from 'src/app/models/activity';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // activities = this.cartService.getActivities();

  // constructor(private cartService : CartService) { }

  ngOnInit(): void {
    console.log("Inside Cart COmpo")
  //  console.log(this.activities);
  }

  public activities: Observable<Activity[]> = of([]);
  public shoppingCartItems: Activity[] = [];

  constructor(private cartService: CartService) {
    this.activities = this
      .cartService
      .getActivities();

    this.activities.subscribe(_ => this.shoppingCartItems = _);
  }

  

}
