import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  breakpoint: number;

  constructor(private breakpointObserver: BreakpointObserver){}
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 640) ? 2 : 1;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 640) ? 2 : 1;
  }

}
