import { Injectable } from '@angular/core';
import { ManagementContract } from '../models/management-contract.model';

import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property.model';
import { PropertyOwner } from '../models/property-owner.model';
import { PropertyListing } from '../models/property-listing.model';
import { PropertyLease } from '../models/property-lease.model';
import { PropertyTenant } from '../models/property-tenant.model';
import { RentalApplication } from '@lib/app-core';
import { PropertyImg } from '../models/property-img';
import { OpenHouse } from '../models/openhouse.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = 'http://localhost:21799';

  constructor(private http: HttpClient) { }

  getPropertyList(user: string) { // user: property manager username/id
    debugger;
    console.log('username in property service', user);
    return this.http.get<Property[]>(`${this.baseUrl}/property/all/${user}`);
  }

  getAllPropertyImages() {
    debugger;
    return this.http.get<PropertyImg[]>(`${this.baseUrl}/listing/allimgs`);
  }

  getPropertyOwnerList(user: string) {
    debugger;
    console.log('username in owner service', user);
    // return this.http.get<PropertyOwner[]>(`${this.baseUrl}/property/ownersbyppt/${user}`);
    const url = this.baseUrl + '/property/ownersbyppt/' + user;
    console.log('url for owner list', url);
    return this.http.get<PropertyOwner[]>(url);
  }

  getManagementContractList(user: string) {
    debugger;
    console.log('username in contract service', user);
    return this.http.get<ManagementContract[]>(`${this.baseUrl}/property/contractsbypm/${user}`);
  }

  getAllPropertyListings() {
    debugger;
    return this.http.get<PropertyListing[]>(`${this.baseUrl}/listings`);
  }

  getLeaseAgreementList() {
    debugger;
    return this.http.get<PropertyLease[]>(`${this.baseUrl}/leases`);
  }

  getTenantList() {
    debugger;
    return this.http.get<PropertyTenant[]>(`${this.baseUrl}/tenants`);
  }

  getRentalApplicationList() {
    debugger;
    return this.http.get<RentalApplication[]>(`${this.baseUrl}/applications`);
  }

  getOpenHouseList() {
    debugger;
    return this.http.get<OpenHouse[]>(`${this.baseUrl}/listing/allopenhouses`);
  }

  getRentPaymentList() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/rentpayment/renthistory`);
  }

  getVendorList() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/WorkOrder/vendor/all`);
  }

  getWorkOrderList() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/WorkOrder/all`);
  }

  getServiceList() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/WorkOrder/ServiceRequest/all`);
  }

  getAllInvoices() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/Workorder/invoice/all`);
  }

  getAllCouncils() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/property/stratalist`);
  }


}
