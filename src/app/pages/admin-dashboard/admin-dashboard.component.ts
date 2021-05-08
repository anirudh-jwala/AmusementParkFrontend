import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
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

  @ViewChild('MatPaginator1') customerPaginator: MatPaginator;
  @ViewChild('MatPaginator2') activityPaginator: MatPaginator;
  @ViewChild('MatPaginator3') ticketPaginator: MatPaginator;
  result : boolean;
  activity : Activity ;
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
    this.activityService.GetAllActivities().subscribe((data: any) => {
      this.dataSourceActivity = new MatTableDataSource<Activity>(data);
      this.dataSourceActivity.paginator = this.activityPaginator;
    });
  }

  loadAllCustomers() {
    return this.customerService.GetAllCustomers().subscribe((data: any) => {
      this.dataSourceCustomer = new MatTableDataSource<Customer>(data);
      this.dataSourceCustomer.paginator = this.customerPaginator;
    });
  }

  loadAllTickets() {
    return this.ticketService.GetAllTickets().subscribe((data: any) => {
      this.dataSourceTicket = new MatTableDataSource<Ticket>(data);
      this.dataSourceTicket.paginator = this.ticketPaginator;
    });
  }

  registrationform = new FormGroup({
    //username : new FormControl('Amit'), //default value
    activityId:new FormControl(),
    activityName : new FormControl(),
    description : new FormControl(),
    charges : new FormControl(),
    imageUrl : new FormControl(),
    chargeDetails: new FormControl()
  });

  onSubmit(){
    console.log("Activity Added Successfully....!");
    alert("Activity Added Successfully.....!");
    this.activityService.RegisterNewActivity(this.registrationform.value);
    location.reload();
  }
  setClickedRow(id:number){
    this.result  = confirm("Are you sure you want to delete these Records?");
    if(this.result==true){
      this.activityService.delete(id).subscribe((data:any)=>{
        this.ngOnInit();
      })
    }
  }

  activityupdateform=new FormGroup({  
    activityId:new FormControl(),
    activityName : new FormControl(),
    description : new FormControl(),
    charges : new FormControl(),
    imageUrl : new FormControl(),
    chargeDetails: new FormControl()
    
  });  
  
  update(activity:any){    
      this.activityupdateform.patchValue({
      activityId:activity.activityId,
      activityName:activity.activityName,
      description:activity.description,
      charges:activity.charges,
      imageUrl:activity.imageUrl,
      chargeDetails:activity.chargeDetails
      });   
  }


  onUpdate(){
    console.log("Activity edited Successfully....!");
    alert("Customer edited Successfully.....!");
    console.log(this.activityupdateform.value);
    this.activityService.update(this.activityupdateform.value).subscribe(data=>{
     // this.ngOnInit();
    });

    location.reload();
  }
  
}
