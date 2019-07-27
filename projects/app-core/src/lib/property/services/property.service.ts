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
  property: Property;

  // token = localStorage.getItem('currentUser');

  // authHeader(headers: Headers) {
  //   headers.append('Authorization', 'Bearer ' + this.token );
  // }

  constructor(protected http: HttpClient) { }// Not use generic service due to the complexity of the domain model

  // Property operations

  createProperty() {   //  : Observable<any> to be return type if necessary

  }

  updateProperty() {

  }

  updatePropertyStatus() {

  }

  assignPm() {

  }

  removeProperty() {

  }

  addProperty(property: Property) {
    debugger;
    return this.http.post<Property>(`${this.baseUrl}/property/add`, property);
  }

  // return this.http.post<Property>(`${this.baseUrl}/property/all);
  getPropertyList() {
    debugger;

    return this.http.get<Property[]>(`${this.baseUrl}/property/all`); // return type could be <Property[]>?
  }

  getPropertyDetails(id: number) {
    // return this.http.get<Property>(`${this.baseUrl}/property/${id});
    return this.http.get<Property[]>(`${this.baseUrl}/property/${id}`);
  }

}
