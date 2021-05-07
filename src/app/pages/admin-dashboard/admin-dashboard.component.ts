import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Activity } from 'src/app/models/activity';
import { Customer } from 'src/app/models/customer';
import { Ticket } from 'src/app/models/ticket';
import { ActivityService } from 'src/app/services/activity.service';
import { CustomerService } from 'src/app/services/customer.service';
import { TicketService } from 'src/app/services/ticket.service';

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
  ];
  displayedActivityColumns: string[] = [
    'activity id',
    'activity name',
    'description',
    'charges',
    'edit action',
    'remove action',
  ];
  displayedTicketColumns: string[] = [
    'ticket id',
    'date',
    'bill',
    'activities',
  ];
  dataSourceActivity = new MatTableDataSource<Activity>();
  dataSourceCustomer = new MatTableDataSource<Customer>();
  dataSourceTicket = new MatTableDataSource<Ticket>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private activityService: ActivityService,
    private customerService: CustomerService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.loadAllActivities();
    this.loadAllCustomers();
    this.loadAllTickets();
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

  loadAllTickets() {
    return this.ticketService.GetAllTickets().subscribe((data: any) => {
      this.dataSourceTicket = new MatTableDataSource<Ticket>(data);
      this.dataSourceTicket.paginator = this.paginator;
    });
  }
}
