import { createAction, props } from '@ngrx/store';
import { PropertyListing } from '@lib/app-core';


debugger;
/**
 * Get Property Listing Actions
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

/**
 * Get Property Listing Details Actions
 */
export const getPropertyListingDetails = createAction(
  '[Marketing] Get Property Listing Details',
  props<{payload: number}>()
);

export const getPropertyListingDetailsSuccess = createAction(
  '[Marketing] Get Property Listing Details Success',
  props<{payload: PropertyListing}>()
);

export const getPropertyListingDetailsFailure = createAction(
  '[Marketing] Get Property List Details Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property Details listing') => {
    return ({ payload: { errorMessage } });
  }
);
