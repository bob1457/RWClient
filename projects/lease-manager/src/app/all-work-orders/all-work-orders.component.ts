import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkOrder } from '@lib/app-core';
import { Observable } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { leaseList, workOrderList } from '../store/reducers';
import { getAllLeases } from '@lib/dashboard/lib/store/dash.actions';
import { loadingStatus } from '@lib/dashboard';
import { getAllWorkOrders } from '../store/actions/lease.actions';

@Component({
  selector: 'app-all-work-orders',
  templateUrl: './all-work-orders.component.html',
  styleUrls: ['./all-work-orders.component.scss']
})
export class AllWorkOrdersComponent implements OnInit {

  loading$: Observable<boolean>;

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
    });
  }

  ngOnInit() {

    debugger;

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.store.dispatch(getAllWorkOrders());

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
