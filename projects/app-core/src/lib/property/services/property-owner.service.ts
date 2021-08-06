import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyOwner } from '../models/property-owner.model';


@Injectable({
  providedIn: 'root'
})
export class PropertyOwnerService {

  baseUrl = 'http://localhost:21799';

  constructor(protected http: HttpClient) { }

  ownerListByProperty: PropertyOwner[];





  addPropertyOwner(owner: PropertyOwner) {
    debugger;

    return this.http.post<PropertyOwner>(`${this.baseUrl}/property/addOwner`, owner);
  }

  // addExistingOwnerToProperty() {}

  removeOwner(owner: any) {
    debugger;
    return this.http.post(`${this.baseUrl}/property/remove`, owner);
  }

  updateOwner(owner: PropertyOwner) {
    debugger;
    return this.http.post<PropertyOwner>(`${this.baseUrl}/property/owner/update`, owner);
  }

  getPropertyOwnerList() {
    return this.http.get<PropertyOwner[]>(`${this.baseUrl}/property/owners`);
  }

  getPropertyOwnerListByPm(user: any) {
    debugger;
    console.log('username in owner service', user);
    // return this.http.get<PropertyOwner[]>(`${this.baseUrl}/property/ownersbyppt/${user}`);
    const url = this.baseUrl + '/property/ownersbypm/' + user;
    console.log('url for owner list', url);
    return this.http.get<PropertyOwner[]>(url);
  }

  getPropertyDetails(id: number) {
    // return this.http.get<Property>(`${this.baseUrl}/property/${id});
    return this.http.get<PropertyOwner>(`${this.baseUrl}/property/owner/${id}`);
  }





}
