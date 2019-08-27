import { Injectable } from '@angular/core';
import { ManagementContract } from '../models/management-contract.model';

import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property.model';
import { PropertyOwner } from '../models/property-owner.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = 'http://localhost:21799';

  constructor(private http: HttpClient) { }

  getPropertyList() {
    debugger;

    return this.http.get<Property[]>(`${this.baseUrl}/property/all`);
  }

  getPropertyOwnerList() {
    debugger;
    return this.http.get<PropertyOwner[]>(`${this.baseUrl}/property/owners`);
  }

  getManagementContractList() {
    debugger;
    return this.http.get<ManagementContract[]>(`${this.baseUrl}/property/contracts`);
  }

  getLeaseAgreementList() {

  }

  getTenantList() {

  }



}
