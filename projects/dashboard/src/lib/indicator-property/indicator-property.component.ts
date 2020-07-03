import { Property } from '@lib/app-core';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { DashState } from '../store/dash.state';
import { loadingStatus } from '../store/dash.reducer';


@Component({
  selector: 'lib-indicator-property',
  templateUrl: './indicator-property.component.html',
  styleUrls: ['./indicator-property.component.css']
})
export class IndicatorPropertyComponent implements OnInit {

  loading$: Observable<boolean>;

  @Input() propertyList: Property[];

  constructor(private store: Store<DashState>) { }

  ngOnInit() {
    debugger;

    this.loading$ = this.store.pipe(select(loadingStatus));
  }

}
