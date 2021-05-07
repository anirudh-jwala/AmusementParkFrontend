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
  }
}
