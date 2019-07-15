import { AppCoreService } from './../../app-core.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService extends AppCoreService<Property, number> {

  constructor(protected http: HttpClient) {
    super(http, '');
  }

  updateStatus() {

  }

}
