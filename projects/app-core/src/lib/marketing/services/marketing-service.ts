import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyListing } from '../models/property-listing.model';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  baseUrl = 'http://localhost:21799';

  constructor(protected http: HttpClient) { }

  getAllPropertyListings() {
    debugger;
    return this.http.get<PropertyListing[]>(`${this.baseUrl}/listings`);
  }

  getPropertyListingDetails() {}

  addPropertyListing() {}

  updatePropertyListing() {}

  addImagesToListing() {}

  deletePropertyListing() {}

  changeListingStatus() {}

  addOpenHouse() {}

  updateOpenHouse() {}

  addOpenHouseViewer() {}

}
