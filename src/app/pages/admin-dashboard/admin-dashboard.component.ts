import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Activity } from 'src/app/models/activity';
import { Customer } from 'src/app/models/customer';
import { ActivityService } from 'src/app/services/activity.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  displayedCustomerColumns: string[] = [
    'customer id',
    'customer name',
    'email',
    'address',
    'mobile number',
    'edit action',
    'remove action',
  ];
  displayedActivityColumns: string[] = [
    'activity id',
    'activity name',
    'description',
    'charges',
    'edit action',
    'remove action',
  ];
  dataSourceActivity = new MatTableDataSource<Activity>();
  dataSourceCustomer = new MatTableDataSource<Customer>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private activityService: ActivityService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.loadAllActivities();
    this.loadAllCustomers();
  }

  loadAllActivities() {
    return this.activityService.GetAllActivities().subscribe((data: any) => {
      this.dataSourceActivity = new MatTableDataSource<Activity>(data);
      this.dataSourceActivity.paginator = this.paginator;
    });
  }

  loadAllCustomers() {
    return this.customerService.GetAllCustomers().subscribe((data: any) => {
      this.dataSourceCustomer = new MatTableDataSource<Customer>(data);
      this.dataSourceCustomer.paginator = this.paginator;
    });
  }
}
