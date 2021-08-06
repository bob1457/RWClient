import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkOrder } from '@lib/app-core';
import { Observable } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { leaseList, workOrderList } from '../store/reducers';
import { getAllLeases } from '@lib/dashboard/lib/store/dash.actions';
import { loadingStatus } from '@lib/dashboard';
import { getAllWorkOrders, getAllWorkOrdersByPm } from '../store/actions/lease.actions';
import { getUserInfo } from '@lib/auth';

@Component({
  selector: 'app-all-work-orders',
  templateUrl: './all-work-orders.component.html',
  styleUrls: ['./all-work-orders.component.scss']
})
export class AllWorkOrdersComponent implements OnInit {

  loading$: Observable<boolean>;
  username;
  userrole;

  list: WorkOrder[];

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['icon', 'id', 'workOrderName', 'category', 'type', 'status', 'startDate', 'endDate', 'created',  'modified','action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource = new MatTableDataSource<WorkOrder>();

  constructor(private store: Store<PropertyLeaseState>) {
    this.store.pipe(select(workOrderList))
    .subscribe(data => {
      // if (data != null) { // select data from state store if data exists
        this.list = data;
        this.dataSource.data = this.list;
        // this.detailsForm.patchValue(data);
        console.log(this.list);

        setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });
    });
  }

  ngOnInit() {

    debugger;

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.getCurrentUser();


    if (this.userrole == 'pm') {
      console.log('get there for pm');
      this.store.dispatch(getAllWorkOrdersByPm({ payload: this.username }));
    } else {
      console.log('get there for all');
      this.store.dispatch(getAllWorkOrders());
    }


    // if (!this.list) {
    //   this.store.dispatch(getAllWorkOrders());
    // }


  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
