import { createAction, props } from '@ngrx/store';
import { PropertyListing } from '@lib/app-core';


debugger;
/**
 * Get Property List Actions
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
