import { createAction, props } from '@ngrx/store';
import { PropertyLease, PropertyTenant, WorkOrder, Vendor } from '@lib/app-core';

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
 * Update Tenant Actions
 */

export const updateTenant = createAction(
  '[Leases] Update Tenant',
  props<{payload: PropertyTenant}>()
);

export const updateTenantSuccess = createAction(
  '[Leases] Update Tenant Success',
  props<{payload: PropertyTenant}>()
);

/**
 * Get All Work Orders Actions
 */
export const getAllWorkOrders = createAction(
  '[Leases] Get All  Work Orders'
);

export const getAllWorkOrdersSuccess = createAction(
  '[Leases] Get All Work Orders Success',
  props<{payload: WorkOrder[]}>()
);

export const getAllWorkOrdersFailure = createAction(
  '[Leases] Get All  Work Orders Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading work orders') => {
    return ({ payload: { errorMessage } });
  }
);


/**
 * Get Wrok Order Details Actions
 */
export const getWorkOrderDetails = createAction(
  '[Leases] Get Work Order Details',
  props<{payload: number}>()
);

export const getWorkOrderDetailsSuccess = createAction(
  '[Leases] Get Work Order Details Success',
  props<{payload: WorkOrder}>()
);

export const getWorkOrderDetailsFailure = createAction(
  '[Leases] Get Work Order Details Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading Work Order details') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Add Work Order to Property
 */

export const addWorkOrder = createAction(
  '[Leases] Add Work Order',
  props<{payload: WorkOrder}>()
);

export const addWorkOrderSuccess = createAction(
  '[Leases] Add Work Order Success',
  props<{payload: WorkOrder}>()
);

export const addWorkOrderFailure = createAction(
  '[[Leases] Add Work Order Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding work order') => ({ payload: { errorMessage }})

);

/**
 * Update Work Order Actions
 */

export const updateWorkOrder = createAction(
  '[Leases] Update Work Order',
  props<{payload: WorkOrder}>()
);

export const updateWorkOrderSuccess = createAction(
  '[Leases] Update Work Order Success',
  props<{payload: WorkOrder}>()
);

export const updateWorkOrderFailure = createAction(
  '[Leases] Update Work Order Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error updating work order') => ({ payload: { errorMessage }})

);


/**
 * Get All Vendors Actions
 */
export const getAllVendors = createAction(
  '[Leases] Get All Vendors'
);

export const getAllVendorsSuccess = createAction(
  '[Leases] Get All Vendors Success',
  props<{payload: Vendor[]}>()
);

export const getAllVendorsFailure = createAction(
  '[Leases] Get All Vendors Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading vendors') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get Vendor Details Actions
 */
export const getVendorDetails = createAction(
  '[Leases] Get Vendor Details',
  props<{payload: number}>()
);

export const getVendorDetailsSuccess = createAction(
  '[Leases] Get Vendor Details Success',
  props<{payload: PropertyTenant}>()
);

export const getVendorDetailsFailure = createAction(
  '[Leases] Get Vendor Deatils Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading Vendor details') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Add Vendor
 */

export const addVendor = createAction(
  '[Leases] Add Vendors',
  props<{payload: WorkOrder}>()
);

export const addVendorSuccess = createAction(
  '[Leases] Add Vendors Success',
  props<{payload: WorkOrder}>()
);

export const addVendorFailure = createAction(
  '[[Leases] Add Vendors Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding work order') => ({ payload: { errorMessage }})

);

/**
 * Update Vendor Actions
 */

export const updateVendor = createAction(
  '[Leases] Update Vendor',
  props<{payload: Vendor}>()
);

export const updateVendorsSuccess = createAction(
  '[Leases] Update Vendor Success',
  props<{payload: Vendor}>()
);

export const updatVendorsFailure = createAction(
  '[Leases] Update Vendor Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error updating work order') => ({ payload: { errorMessage }})

);




export const updateTenantFailure = createAction(
  '[Leases] Update Tenant Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error updating property') => ({ payload: { errorMessage }})

);

