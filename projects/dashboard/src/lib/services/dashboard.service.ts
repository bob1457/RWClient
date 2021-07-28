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

  getPropertyList() {
    debugger;

    return this.http.get<Property[]>(`${this.baseUrl}/property/all`);
  }

  getAllPropertyImages() {
    debugger;
    return this.http.get<PropertyImg[]>(`${this.baseUrl}/listing/allimgs`);
  }

  getPropertyOwnerList() {
    debugger;
    return this.http.get<PropertyOwner[]>(`${this.baseUrl}/property/owners`);
  }

  getManagementContractList() {
    debugger;
    return this.http.get<ManagementContract[]>(`${this.baseUrl}/property/contracts`);
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
