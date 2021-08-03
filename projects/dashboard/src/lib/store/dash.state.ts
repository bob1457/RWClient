import { createFeatureSelector } from '@ngrx/store';
import { ManagementContract } from '../models/management-contract.model';
import { Property } from '../models/property.model';
import { PropertyOwner } from '../models/property-owner.model';
import { PropertyListing, RentalApplication } from '@lib/app-core';
import { PropertyImg } from '../models/property-img';


export interface DashState {
  loading: boolean;
  loaded: boolean;
  properties: Property[];
  propertyImgList: PropertyImg[];
  owners: PropertyOwner[];
  contracts: ManagementContract[];
  listings: PropertyListing[];
  tenants: any[];
  leases: any[];
  applications: RentalApplication[];
  workorders: any[];
  openHouses: any[];
  rentPayments: any[];
  errorMessage: string;
  vendors: any[];
  servierequests: any[];
  invoiceList: any[];
  councilList: any[];
}


export const selectDashboardState = createFeatureSelector<DashState>('dashboard');
