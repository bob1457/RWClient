import { createAction, props } from '@ngrx/store';
import { PropertyLease, PropertyTenant } from '@lib/app-core';

debugger;

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


/**
 * Get Lease Details Actions
 */
export const getLeaseDetails = createAction(
  '[Leases] Get Lease Details',
  props<{payload: number}>()
);

export const getLeaseDetailsSuccess = createAction(
  '[Leases] Get Lease Details Success',
  props<{payload: PropertyLease}>()
);

export const getLeaseDetailsFailure = createAction(
  '[Leases] Get lease details Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading lease details') => {
    return ({ payload: { errorMessage } });
  }
);


/**
 * Get Property Leasing Tenants Actions
 */
export const getAllTenants = createAction(
  '[Leases] Get all tenants'
);

export const getAllTenantsSuccess = createAction(
  '[Leases] Get all tenants Success',
  props<{payload: PropertyTenant[]}>()
);

export const getAllTenantsFailure = createAction(
  '[Leases] Get all tenants Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property listing') => {
    return ({ payload: { errorMessage } });
  }
);



