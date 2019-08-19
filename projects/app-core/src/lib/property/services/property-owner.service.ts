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





  addOwnerToProperty() {}

  // addExistingOwnerToProperty() {}

  removeOwnerFromProperty() {}

  updateOwner() {}

  getPropertyOwnerList() {}

  getPropertyDetails(id: number) {
    // return this.http.get<Property>(`${this.baseUrl}/property/${id});
    return this.http.get<PropertyOwner>(`${this.baseUrl}/property/owner/${id}`);
  }





}
