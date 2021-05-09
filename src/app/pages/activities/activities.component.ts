import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[];
  cart = [];

  constructor(
    private activityService: ActivityService,
    private cartService: CartService,
    private snakbarService: MatSnackBar,
    private router: Router,
    private tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.loadAllActivities();
  }

  loadAllActivities() {
    return this.activityService.GetAllActivities().subscribe((data: any) => {
      this.activities = data;
    });
  }

  addToCart(activity: Activity) {
    if (this.tokenService.getToken()) {
      let result: boolean = this.cartService.addToCartService(activity);

      if (result) {
        let snakbarRef = this.snakbarService.open(
          'Added item to cart',
          'View cart',
          {
            duration: 5000,
          }
        );
        snakbarRef.onAction().subscribe(() => {
          this.router.navigateByUrl('/cart');
        });
      } else {
        this.snakbarService.open('Item already present in cart', '', {
          duration: 5000,
        });
      }
    } else {
      this.router.navigateByUrl('/login');
      this.snakbarService.open('Login is required', '', {
        duration: 5000,
      });
    }
  }
}
