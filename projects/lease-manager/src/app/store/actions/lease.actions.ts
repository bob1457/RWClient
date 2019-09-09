import { createAction, props } from '@ngrx/store';
import { PropertyLease } from '@lib/app-core';


/**
 * Get Property Leasing Agreements Actions
 */
export const getAllLeases = createAction(
  '[Leases] Get all leases'
);

export const getAllLeasesSuccess = createAction(
  '[Leases] Get all leases Success',
  props<{payload: PropertyLease[]}>()
);

export const getPAllLeasesFailure = createAction(
  '[Leases] Get all leases Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property listing') => {
    return ({ payload: { errorMessage } });
  }
);
