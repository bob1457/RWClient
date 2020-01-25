import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PieChartData } from '../models/pie-chart-data.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  baseUrl = 'http://localhost:21799';

  constructor(private http: HttpClient) { }

  getPieChartData() {
    return this.http.get<PieChartData[]>(`${this.baseUrl}/Charts/piechart`);
  }
}
