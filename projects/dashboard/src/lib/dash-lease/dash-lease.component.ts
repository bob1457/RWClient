import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DashState } from '../store/dash.state';
import { getAllLeases, getAllTenants } from '../store/dash.actions';
import { PropertyTenant } from '../models/property-tenant.model';
import { PropertyLease } from '../models/property-lease.model';
import { Observable } from 'rxjs';
import { loadingStatus } from '../store/dash.reducer';

@Component({
  selector: 'lib-dash-lease',
  templateUrl: './dash-lease.component.html',
  styleUrls: ['./dash-lease.component.css']
})
export class DashLeaseComponent implements OnInit {

  loading$: Observable<boolean>;


  breakpoint: number;

  @Input() tenants: PropertyTenant[];
  @Input() rentals: PropertyLease[];

  constructor(private store: Store<DashState>) { }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.breakpoint = (window.innerWidth <= 640) ? 2 : 1;
    debugger;
    // return this.store.dispatch(getPropertyOwnerList()) ;
    // this.store.dispatch(getAllLeases()) ;
    // this.store.dispatch(getAllTenants());
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 640) ? 2 : 1;
  }

}
