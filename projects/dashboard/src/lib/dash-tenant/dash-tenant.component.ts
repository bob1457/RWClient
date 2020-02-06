import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashState } from '../store/dash.state';
import { getAllTenants } from '../store/dash.actions';
import { BarChartData } from '../models/bar-chart.model';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'lib-dash-tenant',
  templateUrl: './dash-tenant.component.html',
  styleUrls: ['./dash-tenant.component.css']
})
export class DashTenantComponent implements OnInit {

  breakpoint: number;

  chartData = [];
  chartLabel = [];

  constructor(private store: Store<DashState>, private chartService: ChartService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 640) ? 2 : 1;
    debugger;
    // return
    this.store.dispatch(getAllTenants());
    this.getChartData();
  }

  getChartData() {
    debugger;
    this.chartService.getBarChartData()
    .subscribe((result: BarChartData[]) => {
      result.forEach( x => {
        this.chartLabel.push(x.city);
        this.chartData.push(x.count);
      });
      console.log(this.chartData);
      console.log(this.chartLabel);
    });

    // this.pieChartData = this.chartData;
    // this.pieChartLabels = this.chartLabel;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 640) ? 2 : 1;
  }

}
