import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[];
  cart = [];

  constructor(private activityService: ActivityService,  private route: ActivatedRoute,
    private cartService: CartService) {}

  ngOnInit(): void {
    this.loadAllActivities();
  }

  loadAllActivities() {
    return this.activityService.GetAllActivities().subscribe((data: any) => {
      this.activities = data;
    });
  }

  addToCart(activity: Activity) {
    // console.log('Selected: ' + activityId);

    // if (!this.cart.includes(activityId)) {
    //   this.cart.push(this.activities[activityId - 1]);
    //   window.localStorage.setItem('cartItem', JSON.stringify(this.cart));
    // }

    this.cartService.addToCart(activity);
    console.log('Selected: ' + activity);
    window.alert('Your product has been added to the cart!');

  }
}
