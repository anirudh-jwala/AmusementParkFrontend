import { Component, OnInit } from '@angular/core';
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

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.loadAllActivities();
  }

  loadAllActivities() {
    return this.activityService.GetAllActivities().subscribe((data: any) => {
      this.activities = data;
    });
  }

  addToCart(activityId: number): void {
    console.log('Selected: ' + activityId);

    if (!this.cart.includes(activityId)) {
      this.cart.push(this.activities[activityId - 1]);
      window.localStorage.setItem('cartItem', JSON.stringify(this.cart));
    }
  }
}
