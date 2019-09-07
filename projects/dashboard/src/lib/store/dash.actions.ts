import { createAction, props } from '@ngrx/store';
import { Property } from '../models/property.model';
import { PropertyOwner } from '../models/property-owner.model';
import { ManagementContract } from '../models/management-contract.model';
import { PropertyListing } from '@lib/app-core';

debugger;
/**
 * Get Property List Actions
 */
export const getPropertyList = createAction(
  '[Property] Get Property List'
);

export const getPropertyListSuccess = createAction(
  '[Property] Get Property List Success',
  props<{payload: Property[]}>()
);

export const getPropertyListFailure = createAction(
  '[Property] Get Property List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property list') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get Property Owner List Actions
 */
export const getPropertyOwnerList = createAction(
  '[Property] Get Property Owner List'
);

export const getPropertyOwnerListSuccess = createAction(
  '[Property] Get Property Owner List Success',
  props<{payload: PropertyOwner[]}>()
);

export const getPropertyOwnerListFailure = createAction(
  '[Property] Get Property List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property Owner list') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get Management Contract List Actions
 */
export const getContractList = createAction(
  '[Property] Get Contract List'
);

export const getContractListSuccess = createAction(
  '[Property] Get Contract List Success',
  props<{payload: ManagementContract[]}>()
);

export const getContractListFailure = createAction(
  '[Property] Get Contract List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading contract list') => {
    return ({ payload: { errorMessage } });
  }
);


/**
 * Get Marketing Property Listing Actions
 */
export const getPropertyListing = createAction(
  '[Marketing] Get Property Listing'
);

export const getPropertyListingSuccess = createAction(
  '[Marketing] Get Property Listing Success',
  props<{payload: PropertyListing[]}>()
);

export const getPropertyListingFailure = createAction(
  '[Marketing] Get Property List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property listing') => {
    return ({ payload: { errorMessage } });
  }
);

