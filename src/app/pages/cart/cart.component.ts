import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Activity } from 'src/app/models/activity';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  activities: Observable<Activity[]> = of([]);
  shoppingCartItems: Activity[];
  displayedCartColumns: string[] = ['activity', 'details', 'price', 'action'];

  constructor(
    private cartService: CartService,
    private snakbarService: MatSnackBar
  ) {
    this.activities = this.cartService.getActivities();

    this.activities.subscribe((_) => (this.shoppingCartItems = _));
  }

  ngOnInit(): void {}

  removeFromCart(activity: Activity) {
    let result: boolean = this.cartService.removeFromCartService(activity);

    if (result) {
      this.snakbarService.open('Item removed from cart', '', {
        duration: 5000,
      });
    }
  }
}
