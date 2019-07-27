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

  getOwnerListByProperty() {}

  getOwnerDetails() {}





}
