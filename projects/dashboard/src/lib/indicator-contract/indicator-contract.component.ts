import { ManagementContract } from '@lib/app-core';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { loadingStatus } from '../store/dash.reducer';
import { DashState } from '../store/dash.state';

@Component({
  selector: 'lib-indicator-contract',
  templateUrl: './indicator-contract.component.html',
  styleUrls: ['./indicator-contract.component.css']
})
export class IndicatorContractComponent implements OnInit {

  loading$: Observable<boolean>;

  @Input() contractList: ManagementContract[];

  constructor(private store: Store<DashState>) { }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(loadingStatus));
  }

}
