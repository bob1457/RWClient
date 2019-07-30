import { PropertyStatus } from '../models/property-state.model';
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

  addProperty(property: Property) {
    debugger;
    return this.http.post<Property>(`${this.baseUrl}/property/add`, property);
  }

  updateProperty(property: Property) {
    debugger;
    return this.http.post(`${this.baseUrl}/property/update`, property);
  }

  updatePropertyStatus(status: PropertyStatus) {
    debugger;
    return this.http.post(`${this.baseUrl}/property/update`, status);
  }

  assignPm() {

  }

  removeProperty(property: any) {
    debugger;
    return this.http.post(`${this.baseUrl}/property/remove`, property);
  }





  // return this.http.post<Property>(`${this.baseUrl}/property/all);
  getPropertyList() {
    debugger;

    return this.http.get<Property[]>(`${this.baseUrl}/property/all`); // return type could be <Property[]>?
  }

  getPropertyDetails(id: number) {
    // return this.http.get<Property>(`${this.baseUrl}/property/${id});
    return this.http.get<Property>(`${this.baseUrl}/property/${id}`);
  }

}
