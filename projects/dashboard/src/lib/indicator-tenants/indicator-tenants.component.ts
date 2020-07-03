import { PropertyTenant } from '@lib/app-core';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { DashState } from '../store/dash.state';
import { loadingStatus } from '../store/dash.reducer';


@Component({
  selector: 'lib-indicator-tenants',
  templateUrl: './indicator-tenants.component.html',
  styleUrls: ['./indicator-tenants.component.css']
})
export class IndicatorTenantsComponent implements OnInit {

  loading$: Observable<boolean>;

  @Input() tenantList: PropertyTenant[];

  constructor(private store: Store<DashState>) { }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

  }

}
