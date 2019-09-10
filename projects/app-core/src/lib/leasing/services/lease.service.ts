import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyLease } from '../models/property-lease.model';

@Injectable({
  providedIn: 'root'
})
export class LeaseService {

  baseUrl = 'http://localhost:21799';

  constructor(protected http: HttpClient) { }

  getAllLeases() {
    debugger;
    return this.http.get<PropertyLease[]>(`${this.baseUrl}/leases`);
  }
}
