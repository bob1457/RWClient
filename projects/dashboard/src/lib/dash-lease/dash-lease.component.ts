import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashState } from '../store/dash.state';
import { getAllLeases, getAllTenants } from '../store/dash.actions';

@Component({
  selector: 'lib-dash-lease',
  templateUrl: './dash-lease.component.html',
  styleUrls: ['./dash-lease.component.css']
})
export class DashLeaseComponent implements OnInit {

  breakpoint: number;

  constructor(private store: Store<DashState>) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 640) ? 2 : 1;
    debugger;
    // return this.store.dispatch(getPropertyOwnerList()) ;
    this.store.dispatch(getAllLeases()) ;
    this.store.dispatch(getAllTenants());
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 640) ? 2 : 1;
  }

}
