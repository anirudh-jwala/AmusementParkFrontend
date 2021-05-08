import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  

  customer : Observable<Customer> = of();
   
  list:any;
  remoteCustomerList : any[];
  //dataSourceCustomer = new MatTableDataSource<Customer>();

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.loadremotecustomerById(this.customersData);
  }

  data =sessionStorage.getItem("auth-user");
  customersData = JSON.parse(this.data);
  
  
  loadremotecustomerById(customersData) {
    return this.customerService.GetCustomerById(customersData).subscribe((data: any) => {
      this.remoteCustomerList = data;});
    // console.log("data"+this.customersData);
  }



  customerupdateform = new FormGroup({
    customerId: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    mobileNumber: new FormControl()
  });

  update(customer: any) {
    this.customerupdateform.patchValue({
      customerId: customer.customerId,
      username: customer.username,
      email: customer.email,
      address: customer.address,
      mobileNumber: customer.mobileNumber
    });
  }

  onUpdate() {
    console.log('Customer edited Successfully....!');
    alert('Customer edited Successfully.....!');
    console.log(this.customerupdateform.value);
    this.customerService
      .update(this.customerupdateform.value)
      .subscribe((data) => {
      });

    location.reload();
  }
}
