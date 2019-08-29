import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashState } from '../store/dash.state';
import { getPropertyList } from '../store/dash.actions';

@Component({
  selector: 'lib-dash-property',
  templateUrl: './dash-property.component.html',
  styleUrls: ['./dash-property.component.css']
})
export class DashPropertyComponent implements OnInit {

  breakpoint: number;

  constructor(private store: Store<DashState>) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 640) ? 2 : 1;
    debugger;
    return this.store.dispatch(getPropertyList()) ;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 640) ? 2 : 1;
  }

}
