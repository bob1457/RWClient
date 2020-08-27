import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Observable } from 'rxjs';
import { Vendor } from '@lib/app-core';
import { loadingStatus, vendorList } from '../store/reducers/lease.reducers';
import { getAllVendors } from '../store/actions/lease.actions';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  loading$: Observable<boolean>;

  list: Vendor[];

  constructor(private store: Store<PropertyLeaseState>) {
    this.store.select(vendorList)
    .subscribe(vendors => {
      this.list = vendors;
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

}
