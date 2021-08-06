import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceRequest, Vendor } from '@lib/app-core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { serviceRequestList, getServiceRequestList, loadingStatus } from '../store/reducers/lease.reducers';
import { getAllServiceRequests, getAllServiceRequestsByPm } from '../store/actions/lease.actions';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { getUserInfo } from '@lib/auth';

@Component({
  selector: 'app-servie-request-list',
  templateUrl: './servie-request-list.component.html',
  styleUrls: ['./servie-request-list.component.scss']
})
export class ServieRequestListComponent implements OnInit {

  loading$: Observable<boolean>;
  username;
  userrole;

  list: ServiceRequest[];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource = new MatTableDataSource<ServiceRequest>();

  displayedColumns: string[] = ['icon', 'id', 'subject', 'details', 'urgent', 'status', 'propertyName',  'added', 'update', 'action'];

  // constructor(private store: Store<PropertyLeaseState>) {
  //   this.store.select(vendorList)
  //   .subscribe(vendors => {
  //     this.list = vendors;
  //     this.dataSource.data = this.list;

  //     setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });
  //   });
  // }

  constructor(private store: Store<PropertyLeaseState>) {
    this.store.select(serviceRequestList)
        .subscribe(data => {
          this.list = data;
          console.log('sq', this.list);
          this.dataSource.data = this.list;

          setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });
        });
  }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.getCurrentUser();


    if (this.userrole == 'pm') {
      console.log('get there for pm');
      this.store.dispatch(getAllServiceRequestsByPm({ payload: this.username }));
    } else {
      console.log('get there for all');
      this.store.dispatch(getAllServiceRequests());
    }

    // if(!this.list) {
    //   this.store.dispatch(getAllServiceRequests());
    // }

  }


  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getCurrentUser() {
    return this.store.pipe(select(getUserInfo)).subscribe(userData => { // this.user = userData;

      if (!userData) {
        const uname = JSON.parse(localStorage.getItem('auth'));
        this.username = uname.username;
        this.userrole = uname.role;
        console.log('get from pppt manager localstorage', this.username + " " + this.userrole);
      } else {
        this.username = userData.username;
        this.userrole = userData.role;
        console.log('get from state', this.username + " " + this.userrole);
      }

      // this.username = userData.username;
      // this.userrole = userData.role;
      // console.log('get from state', this.username + " " + this.userrole);
    });
  }

}
