import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceRequest, Vendor } from '@lib/app-core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { serviceRequestList, getServiceRequestList, loadingStatus } from '../store/reducers/lease.reducers';
import { getAllServiceRequests } from '../store/actions/lease.actions';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-servie-request-list',
  templateUrl: './servie-request-list.component.html',
  styleUrls: ['./servie-request-list.component.scss']
})
export class ServieRequestListComponent implements OnInit {

  loading$: Observable<boolean>;

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

    this.store.dispatch(getAllServiceRequests());
  }


  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
