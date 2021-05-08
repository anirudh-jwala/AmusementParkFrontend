import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public activities: Observable<Activity[]> = of([]);
  public shoppingCartItems: Activity[];
  displayedCartColumns: string[] = ['activity', 'details', 'price'];

  constructor(private cartService: CartService) {
    this.activities = this.cartService.getActivities();

    this.activities.subscribe((_) => (this.shoppingCartItems = _));
  }

  ngOnInit(): void {}
}
