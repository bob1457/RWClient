import { createFeatureSelector } from '@ngrx/store';
import { ManagementContract } from '../models/management-contract.model';
import { Property } from '../models/property.model';
import { PropertyOwner } from '../models/property-owner.model';


export interface DashState {
  loading: boolean;
  loaded: boolean;
  properties: Property[];
  owners: PropertyOwner[];
  contracts: ManagementContract[];
  tenants: any[];
  leases: any[];
  errorMessage: string;
}


export const selectDashboardState = createFeatureSelector<DashState>('dashboard');
