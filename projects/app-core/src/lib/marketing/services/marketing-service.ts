import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyListing } from '../models/property-listing.model';
import { RentalApplication } from '../models/rental-application.model';
import { PropertyImg } from '../models/property-img.model';
import { OpenHouse } from '../models/openHouse.model';

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

  getAllPropertyListingsByPm(pm: any) {
    debugger;
    return this.http.get<PropertyListing[]>(`${this.baseUrl}/listings/${pm}`);
  }

  getAllRentalProperties() {
    debugger;
    return this.http.get<any[]>(`${this.baseUrl}/listing/allrentalproperties`);
  }

  getPropertyListingDetails(id: number) {
    debugger;
    return this.http.get<PropertyListing>(`${this.baseUrl}/listing/${id}`);
  }

  addPropertyListing(Listing: PropertyListing) {
    debugger;
    return this.http.post<PropertyListing>(`${this.baseUrl}/listing/add`, Listing);
  }

  updatePropertyListing(Listing: PropertyListing) {
    debugger;
    return this.http.post(`${this.baseUrl}/listing/update`, Listing);
  }

  getAllRentalApplications() {
    debugger;
    return this.http.get<RentalApplication[]>(`${this.baseUrl}/applications`);
  }

  getAllRentalApplicationsByPm(pm: any) {
    debugger;
    return this.http.get<RentalApplication[]>(`${this.baseUrl}/applications/${pm}`);
  }

  getRentalApplicationDetails(id: number) {
    debugger;
    return this.http.get<RentalApplication>(`${this.baseUrl}/application/${id}`);
  }

  approveApplication(applicaton: any) {
    debugger;
    return this.http.post(`${this.baseUrl}/application/approve`, applicaton);
  }

  addImagesToListing(img: PropertyImg) {
    debugger;
    return this.http.post(`${this.baseUrl}/listing/addimg`, img);
  }

  removeImagesToListing(img: any) {
    debugger;
    return this.http.post(`${this.baseUrl}/listing/removeimg`, img);
  }

  deletePropertyListing(listing: any) {
    debugger;
    return this.http.post(`${this.baseUrl}/listing/remove`, listing);
  }

  changeListingStatus(listing: any) {
    debugger;
    return this.http.post(`${this.baseUrl}/listing/status`, listing);
  }

  uploadPropertyImages(files, id: any) {
    debugger;

    if (files.length === 0) {
      return;
    }

    // const fileToUpload = files[0] as File;
    let fileToUpload = <File> files[0];

    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('rentalPropertyId', id);

    return this.http.post(`${this.baseUrl}/listing/addimg`, formData);

  }

  getAllPropertyImages() {
    debugger;
    return this.http.get<PropertyImg[]>(`${this.baseUrl}/listing/allimgs`);
  }

  addOpenHouse(data: OpenHouse) {
    debugger;
    return this.http.post<OpenHouse>(`${this.baseUrl}/listing/addopenhouse`, data);
  }

  updateOpenHouse(data: any) {
    debugger;
    return this.http.post(`${this.baseUrl}/listing/updateopenhouse`, data);
  }

  getOpenHouseList() {
    debugger;
    return this.http.get<OpenHouse[]>(`${this.baseUrl}/listing/allopenhouses`);
  }

  getOpenHouseListByPm(pm: any) {
    debugger;
    return this.http.get<OpenHouse[]>(`${this.baseUrl}/listing/allopenhouses/${pm}`);
  }

  // addOpenHouseViewer() {}

}
