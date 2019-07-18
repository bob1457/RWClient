import { AppCoreService } from './../../app-core.service';
import { HttpClient, HttpHandler, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
// export class PropertyService extends AppCoreService<Property, number> {

//   constructor(protected http: HttpClient) {
//     super(http, 'property');
//   }

//   updateStatus() {

//   }

// }
*/
export class PropertyService {

  baseUrl = 'http://localhost:21799';
  // baseUrl = 'http://localhost:19807/api'; // for testing
  propertyList: Property[];

  // token = localStorage.getItem('currentUser');

  // authHeader(headers: Headers) {
  //   headers.append('Authorization', 'Bearer ' + this.token );
  // }

  constructor(protected http: HttpClient) { // Not use generic service due to the complexity of the domain model

  }



  // Property operations

  createProperty() {   //  : Observable<any> to be return type if necessary

  }

  updateSProperty() {

  }

  removeProperty() {

  }

  getPropertyList() {
    debugger;

    return this.http.get<Property[]>(`${this.baseUrl}/property/all`); // return type could be <Property[]>?
  }

  getPropertyDetails() {

  }

  updatePropertyStatus() {

  }

  // Owner operations

  addNewOwnerToProperty() {

  }

  addExistingOwnerToProperty() {

  }

  getOwnersByProperty() {

  }

  getOwnerDetails() {

  }

  removeOwner() {

  }

  updateOwner() {

  }

  // Management contract operations

  addContract() {

  }

  updateContract() {

  }

  getContractDetails() {

  }

  getContractListForProperty() {

  }

  addManagementFees() {

  }

  getFeePaymentHistory() {

  }

}
