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

  getPropertyList() { // user: property manager username/id
    debugger;

    return this.http.get<Property[]>(`${this.baseUrl}/property/all/`);
  }

  getPropertyListByPm(pm: any) {
    debugger;
    return this.http.get<Property[]>(`${this.baseUrl}/property/all/${pm}`); // return type could be <Property[]>?
  }

  getAllPropertyImages() {
    debugger;
    return this.http.get<PropertyImg[]>(`${this.baseUrl}/listing/allimgs`);
  }

  getPropertyOwnerList() {
    debugger;

    // return this.http.get<PropertyOwner[]>(`${this.baseUrl}/property/ownersbyppt/${user}`);
    const url = this.baseUrl + '/property/owners/';
    console.log('url for owner list', url);
    return this.http.get<PropertyOwner[]>(url);
  }

  getPropertyOwnerListByPm(user: any) {
    debugger;
    console.log('username in owner service', user);
    // return this.http.get<PropertyOwner[]>(`${this.baseUrl}/property/ownersbyppt/${user}`);
    const url = this.baseUrl + '/property/ownersbypm/' + user;
    console.log('url for owner list', url);
    return this.http.get<PropertyOwner[]>(url);
  }

  getManagementContractList() {
    debugger;
    return this.http.get<ManagementContract[]>(`${this.baseUrl}/property/contracts/`);
  }

  getManagementContractListByPm(pm: any) {
    return this.http.get<ManagementContract[]>(`${this.baseUrl}/property/contractsbypm/${pm}`);
  }

  getAllPropertyListings() {
    debugger;
    return this.http.get<PropertyListing[]>(`${this.baseUrl}/listings`);
  }

  getAllPropertyListingsByPm(pm: any) {
    debugger;
    return this.http.get<PropertyListing[]>(`${this.baseUrl}/listings/${pm}`);
  }

  getLeaseAgreementList() {
    debugger;
    return this.http.get<PropertyLease[]>(`${this.baseUrl}/leases`);
  }

  getLeaseAgreementListByPm(pm: any) {
    debugger;
    return this.http.get<PropertyLease[]>(`${this.baseUrl}/leases/${pm}`);
  }

  getTenantList() {
    debugger;
    return this.http.get<PropertyTenant[]>(`${this.baseUrl}/tenants`);
  }

  getTenantListByPm(pm: any) {
    debugger;
    return this.http.get<PropertyTenant[]>(`${this.baseUrl}/tenants/${pm}`);
  }

  getRentalApplicationList() {
    debugger;
    return this.http.get<RentalApplication[]>(`${this.baseUrl}/applications`);
  }

  getRentalApplicationListByPm(pm: any) {
    debugger;
    return this.http.get<RentalApplication[]>(`${this.baseUrl}/applications/${pm}`);
  }

  getOpenHouseList() {
    debugger;
    return this.http.get<OpenHouse[]>(`${this.baseUrl}/listing/allopenhouses`);
  }

  getOpenHouseListByPm(pm: any) {
    debugger;
    return this.http.get<OpenHouse[]>(`${this.baseUrl}/listing/allopenhouses/${pm}`);
  }

  getRentPaymentList() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/rentpayment/renthistory`);
  }

  getVendorList() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/WorkOrder/vendor/all`);
  }

  getVendorListByCreator(user: any) {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/workorder/vendor/all/${user}`);
  }

  getWorkOrderList() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/WorkOrder/all`);
  }

  getWorkOrderListByPm(pm: any) {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/WorkOrder/all/${pm}`);
  }

  getServiceList() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/WorkOrder/ServiceRequest/all`);
  }

  getServiceListByPm(pm: any) {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/WorkOrder/ServiceRequest/all/${pm}`);
  }

  getAllInvoices() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/Workorder/invoice/all`);
  }

  getAllCouncils() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/property/stratalist`);
  }

  getAllCouncilsByCreator(user: any) {
    debugger;

    return this.http.get<any[]>(`${this.baseUrl}/property/stratalist/${user}`); // return type could be <Property[]>?
  }


}
