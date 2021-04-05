import { Component, OnInit, Input } from '@angular/core';
import { getPropertyOwnerList } from '../store/dash.actions';
import { select, Store } from '@ngrx/store';
import { DashState } from '../store/dash.state';
import { RentalApplication } from '../models/application.model';
import { PropertyListing} from '../models/property-listing.model';
import { OpenHouse } from '../models/openhouse.model';
import { loadingStatus } from '../store/dash.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-dash-owner',
  templateUrl: './dash-owner.component.html',
  styleUrls: ['./dash-owner.component.css']
})
export class DashOwnerComponent implements OnInit {

  loading$: Observable<boolean>;

  breakpoint: number;

  @Input() listings: PropertyListing[];
  @Input() applications: RentalApplication[];
  @Input() openhouses: OpenHouse[];

  constructor(private store: Store<DashState>) { }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.breakpoint = (window.innerWidth <= 640) ? 2 : 1;
    debugger;
    // return this.store.dispatch(getPropertyOwnerList()) ;
    return this.store.dispatch(getPropertyOwnerList()) ;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 640) ? 2 : 1;
  }


}
