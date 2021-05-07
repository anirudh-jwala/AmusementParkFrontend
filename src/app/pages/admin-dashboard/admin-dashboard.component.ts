import { ViewChild } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns: string[] = ['customer_id', 'username', 'email', 'address','mobile_number'];
  dataSource = new MatTableDataSource<Activity>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerService : CustomerService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    
  }

  loadAllCustomer(){
    return this.customerService.GetAllCustomers().subscibe((data: any)=>{
      this.dataSource = new MatTableDataSource<Customer>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}

export interface Activity {
  customer_id: number;
  username: string;
  email: string;
  address: string;
  mobile_number : string;
}

const ELEMENT_DATA: Activity[] = [
  { customer_id: 1, username: 'Example', email: 'Example', address: 'Indore',mobile_number:'9612745854' },
];