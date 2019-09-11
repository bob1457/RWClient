import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashState } from '../store/dash.state';
import { getAllTenants } from '../store/dash.actions';

@Component({
  selector: 'lib-dash-tenant',
  templateUrl: './dash-tenant.component.html',
  styleUrls: ['./dash-tenant.component.css']
})
export class DashTenantComponent implements OnInit {

  breakpoint: number;

  constructor(private store: Store<DashState>) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 640) ? 2 : 1;
    debugger;
    return this.store.dispatch(getAllTenants()) ;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 640) ? 2 : 1;
  }

}
