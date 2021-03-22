import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { getAllLeases, getAllServiceRequests, getAllVendors,
        getAllWorkOrders, getRentPaymentList, getAllTenants } from '../store/actions/lease.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';
import { PropertyLease } from '@lib/app-core';
import { leaseList, loadingStatus } from '../store/reducers';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-all-leases',
  templateUrl: './all-leases.component.html',
  styleUrls: ['./all-leases.component.scss']
})
export class AllLeasesComponent implements OnInit {

  loading$: Observable<boolean>;

  list: PropertyLease[];

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['icon', 'id', 'leaseTitle', 'term', 'rentAmount', 'leaseStartDate', 'leaseEndDate', 'created', 'modified', 'action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private store: Store<PropertyLeaseState>) {

    this.store.pipe(select(leaseList))
          .subscribe(data => {
            if (data != null) { // select data from state store if data exists
              this.list = data;
              this.dataSource.data = this.list;
              // this.detailsForm.patchValue(data);
            } else {
              this.store.dispatch(getAllLeases()); // dispatch the action if state has no data

              this.store.pipe(select(leaseList)) // select date from state in store
              .subscribe(list => {
                this.list = list;
                this.dataSource.data = this.list;

                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;

              });
            }
            console.log(data);

            setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });
      });

    // this.store.dispatch(getRentPaymentList());
    // this.store.dispatch(getAllWorkOrders());
    // this.store.dispatch(getAllVendors());
    // this.store.dispatch(getAllServiceRequests());
    // this.store.dispatch(getAllTenants());


  }

  dataSource = new MatTableDataSource<PropertyLease>();

  ngOnInit() {
    debugger;
    // return this.propertyService.getPropertyList().subscribe((pList: Property[]) => {this.list = pList; console.log(pList)});
    this.loading$ = this.store.pipe(select(loadingStatus));

    // this.store.dispatch(getAllLeases());

    // this.store.pipe(
    //   select(leaseList)).subscribe(data => {
    //     this.list = data ;
    //     console.log(data);
    //     this.dataSource.data = this.list;
    //     console.log(this.dataSource.data);
    //   });

    // this.store.pipe(select(leaseList))
    //       .subscribe(data => {
    //         if (data != null) { // select data from state store if data exists
    //           this.list = data;
    //           this.dataSource.data = this.list;
    //           // this.detailsForm.patchValue(data);
    //         } else {
    //           this.store.dispatch(getAllLeases()); // dispatch the action if state has no data

    //           this.store.pipe(select(leaseList)) // select date from state in store
    //           .subscribe(list => {
    //             this.list = list;
    //             this.dataSource.data = this.list;

    //             this.dataSource.sort = this.sort;
    //             this.dataSource.paginator = this.paginator;

    //           });
    //         }
    //         console.log(data);
    //   });

    // Pre-load all these list so that for each lease these list can be filtered
    //
    // this.store.dispatch(getRentPaymentList());
    // this.store.dispatch(getAllWorkOrders());
    // this.store.dispatch(getAllVendors());
    // this.store.dispatch(getAllServiceRequests());
    // this.store.dispatch(getAllTenants());


  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
