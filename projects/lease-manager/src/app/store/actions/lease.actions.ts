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

/**
 * Get Tenant Details Actions
 */
export const getTenantDetails = createAction(
  '[Leases] Get Tenant Details',
  props<{payload: number}>()
);

export const getTenantDetailsSuccess = createAction(
  '[Leases] Get Tenant Details Success',
  props<{payload: PropertyTenant}>()
);

export const getTenantDetailsFailure = createAction(
  '[Leases] Get Tenant Deatils Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading tenant details') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Add Lease Actions
 */

export const addLease = createAction(
  '[Leases] Add Lease',
  props<{payload: PropertyLease}>()
);

export const addLeaseSuccess = createAction(
  '[Leases] Add Lease Success',
  props<{payload: PropertyLease}>()
);

export const addLeaseFailure = createAction(
  '[[Leases] Add Lease Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding lease') => ({ payload: { errorMessage }})

);

/**
 * Add Tenant Actions
 */

export const addTenant = createAction(
  '[Leases] Add Tenant',
  props<{payload: PropertyTenant}>()
);

export const addTenantSuccess = createAction(
  '[Leases] Add Tenant Success',
  props<{payload: PropertyTenant}>()
);

export const addTenantFailure = createAction(
  '[[Leases] Add Tenant Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding Tenant') => ({ payload: { errorMessage }})

);

/**
 * Update Lease Actions
 */

export const updateLease = createAction(
  '[Leases] Update Lease',
  props<{payload: PropertyLease}>()
);

export const updateLeaseSuccess = createAction(
  '[Leases] Update Lease Success',
  props<{payload: PropertyLease}>()
);

export const updateLeaseFailure = createAction(
  '[Leases] Update Lease Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error updating property') => ({ payload: { errorMessage }})

);

/**
 * Update Lease Actions
 */

export const updatTenant = createAction(
  '[Leases] Update Tenant',
  props<{payload: PropertyLease}>()
);

export const updateTenantSuccess = createAction(
  '[Leases] Update Tenant Success',
  props<{payload: PropertyLease}>()
);

export const updateTenantFailure = createAction(
  '[Leases] Update Tenant Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error updating property') => ({ payload: { errorMessage }})

);

