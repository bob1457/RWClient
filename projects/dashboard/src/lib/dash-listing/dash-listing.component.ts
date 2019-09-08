import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashState } from '../store/dash.state';
import { getPropertyListing } from '../store/dash.actions';

@Component({
  selector: 'lib-dash-listing',
  templateUrl: './dash-listing.component.html',
  styleUrls: ['./dash-listing.component.css']
})
export class DashListingComponent implements OnInit {

  breakpoint: number;

  constructor(private store: Store<DashState>) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 640) ? 2 : 1;
    debugger;
    // return this.store.dispatch(getPropertyOwnerList()) ;
    return this.store.dispatch(getPropertyListing()) ;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 640) ? 2 : 1;
  }

}
