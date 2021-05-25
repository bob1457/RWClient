import { PropertyListing, RentalApplication, OpenHouse } from '@lib/app-core';
import * as marketing from './reducers';
import { createFeatureSelector } from '@ngrx/store';


export interface PropertyListingState   { // extends  EntityState<Property>
  loading: boolean | false;
  loaded: boolean | false;
  listings: PropertyListing[] | null;
  listing: any | null;
  applications: RentalApplication[] | null;
  application: RentalApplication | null;
  rentalproperties: any[] | null;
  propertyImgList: any[] | null;
  openHouses: OpenHouse[] | null; // all open houses

  // ownersOfProperty: PropertyOwner[] | null;
  // selectedOwner: PropertyOwner | null;
  // contracts: ManagementContract[] | null;
  // contractsForProperty: ManagementContract[] | null;
  // selectedContract: ManagementContract | null;
  errorMessage: string | null;
}

export const reducer = {
  marketing: marketing.m_reducer
};

export const selectMarketingState = createFeatureSelector<PropertyListingState>('marketing');



