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
  bp: number;
  bp2: number;
  bp1: number;

  constructor(private breakpointObserver: BreakpointObserver){}
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 640) ? 4 : 1;
    this.bp = (window.innerWidth <= 640) ? 4 : 2;
    this.bp2 = (window.innerWidth <= 640) ? 4 : 3;
    this.bp1 = (window.innerWidth <= 640) ? 2 : 1;
  }

  onResize(event) {
    this.breakpoint = (window.innerWidth <= 640) ? 4 : 1;
    this.bp = (window.innerWidth <= 640) ? 4 : 2;
    this.bp2 = (window.innerWidth <= 640) ? 4 : 3;
    this.bp1 = (window.innerWidth <= 640) ? 2 : 1;
  }

}
