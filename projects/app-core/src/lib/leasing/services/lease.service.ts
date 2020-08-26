import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyLease } from '../models/property-lease.model';
import { PropertyTenant } from '../models/property-tenant.model';
import { RentalProperty } from '../models/rental-property.model';
import { NewTenant } from '../models/new-tenant.model';
import { WorkOrder } from '../models/work-order.model';
import { Vendor } from '../models/vendor.model';

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

  getAllTenants() {
    debugger;
    return this.http.get<PropertyTenant[]>(`${this.baseUrl}/tenants`);
  }

  getLeaseDetails(id: number) {
    debugger;
    return this.http.get<PropertyLease>(`${this.baseUrl}/lease/${id}`);
  }

  getTenantDetails(id:number) {
    debugger;
    return this.http.get<PropertyTenant>(`${this.baseUrl}/tenant/${id}`);
  }

  getAllRentalProperties() {
    debugger;
    return this.http.get<RentalProperty[]>(`${this.baseUrl}/lease/allproperty`);
  }

  getAllNewTenants() {
    debugger;
    return this.http.get<NewTenant[]>(`${this.baseUrl}/lease/newtenants`);
  }

  addLease(lease: PropertyLease) {
    debugger;
    return this.http.post<PropertyLease>(`${this.baseUrl}/lease/add`, lease);
  }

  updateLease(lease: PropertyLease) {
    debugger;
    return this.http.post<PropertyLease>(`${this.baseUrl}/lease/update`, lease);
  }

  updateTenant(tenant: PropertyTenant) {
    debugger;
    return this.http.post<PropertyTenant>(`${this.baseUrl}/lease/tenant/update`, tenant);
  }

  getAllNewWorkOrderss() {
    debugger;
    return this.http.get<WorkOrder[]>(`${this.baseUrl}/workorder/all`);
  }

  addWorkOrders(workorder: WorkOrder) {
    debugger;
    return this.http.post<WorkOrder>(`${this.baseUrl}/workorder/add`, workorder);
  }

  updateWorkOrder(workorder: WorkOrder) {
    debugger;
    return this.http.post<WorkOrder>(`${this.baseUrl}/workorder/update`, workorder);
  }


  getAllVendors() {
    debugger;
    return this.http.get<Vendor[]>(`${this.baseUrl}/workorder/vendor/all`);
  }

  addVendor(vendor: Vendor) {
    debugger;
    return this.http.post<Vendor>(`${this.baseUrl}/workorder/vendor/add`, vendor);
  }

  updateVendor(vendor: Vendor) {
    debugger;
    return this.http.post<Vendor>(`${this.baseUrl}/workorder/vendor/update`, vendor);
  }


}
