import { Component, OnInit, Input } from '@angular/core';
import { PropertyLease } from '@lib/app-core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { DashState } from '../store/dash.state';
import { loadingStatus } from '../store/dash.reducer';

@Component({
  selector: 'lib-indicator-rentals',
  templateUrl: './indicator-rentals.component.html',
  styleUrls: ['./indicator-rentals.component.css']
})
export class IndicatorRentalsComponent implements OnInit {

  loading$: Observable<boolean>;

  @Input() rentalList: PropertyLease[];

  constructor(private store: Store<DashState>) { }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));
  }

}
