import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Observable } from 'rxjs';
import { Vendor } from '@lib/app-core';
import { loadingStatus, vendorList } from '../store/reducers/lease.reducers';
import { getAllVendors } from '../store/actions/lease.actions';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  loading$: Observable<boolean>;

  list: Vendor[];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource = new MatTableDataSource<Vendor>();

  displayedColumns: string[] = ['icon', 'id', 'businesstName', 'contactName', 'specialty', 'email', 'telephone', 'added', 'action'];

  constructor(private store: Store<PropertyLeaseState>) {
    this.store.select(vendorList)
    .subscribe(vendors => {
      this.list = vendors;
      this.dataSource.data = this.list;

      setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });
    });
  }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));
    debugger;
    this.store.dispatch(getAllVendors());

    // this.store.pipe(select(vendorList))
    //       .subscribe(data => {
    //         if (data != null) { // select data from state store if data exists
    //           this.list = data;
    //           // this.dataSource.data = this.list;
    //           // this.detailsForm.patchValue(data);
    //         } else {
    //           this.store.dispatch(getAllVendors()); // dispatch the action if state has no data

    //           this.store.pipe(select(vendorList)) // select date from state in store
    //           .subscribe(list => {
    //             this.list = list;
    //             // this.dataSource.data = this.list;

    //             // this.dataSource.sort = this.sort;
    //             // this.dataSource.paginator = this.paginator;

    //           });
    //         }
    //         console.log(data);
    //   });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
