import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'activity id',
    'activity name',
    'description',
    'charges',
    'actions',
  ];
  dataSource = new MatTableDataSource<Activity>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.loadAllActivities();
  }

  loadAllActivities() {
    return this.activityService.GetAllActivities().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<Activity>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
