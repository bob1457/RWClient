import { createAction, props } from '@ngrx/store';
import { Property } from '../models/property.model';
import { PropertyOwner } from '../models/property-owner.model';
import { ManagementContract } from '../models/management-contract.model';
import { PropertyListing, OpenHouse, WorkOrder, Vendor, ServiceRequest } from '@lib/app-core';
import { PropertyLease } from '../models/property-lease.model';
import { PropertyTenant } from '../models/property-tenant.model';
import { RentalApplication } from '../models/application.model';

debugger;
/**
 * Get Property List Actions
 */
export const getPropertyList = createAction(
  '[Property] Get Property List' //,
  // props<{payload: string}>()
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
 * Get Property List by Prperty Manager Actions
 */
export const getPropertyListByPm = createAction(
  '[Property] Get Property By PM List',
  props<{payload: string}>()
);

export const getPropertyListByPmSuccess = createAction(
  '[Property] Get Property List By PM Success',
  props<{payload: Property[]}>()
);

export const getPropertyListByPmFailure = createAction(
  '[Property] Get Property List By PM Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property list') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get Property Image List Actions
 */
export const getPropertyImageList = createAction(
  '[Property] Get Property Image List'
);

export const getPropertyImageListSuccess = createAction(
  '[Property] Get Property Image List Success',
  props<{payload: PropertyListing[]}>()
);

export const getPropertyImageListFailure = createAction(
  '[Property] Get Property Image List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property listing') => {
    return ({ payload: { errorMessage } });
  }
);



/**
 * Get Property Owner List Actions
 */
export const getPropertyOwnerListByPm = createAction(
  '[Property] Get Property Owner List By PM',
  props<{payload: string}>()
);

export const getPropertyOwnerListByPmSuccess = createAction(
  '[Property] Get Property Owner List By PM Success',
  props<{payload: PropertyOwner[]}>()
);

export const getPropertyOwnerListByPmFailure = createAction(
  '[Property] Get Property List By PM Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property Owner list') => {
    return ({ payload: { errorMessage } });
  }
);


/**
 * Get Property Owner List Actions
 */
export const getPropertyOwnerList = createAction(
  '[Property] Get Property Owner List' // ,
  // props<{payload: string}>()
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
 * Get Management Contract List by Property Manager Actions
 */
export const getContractList = createAction(
  '[Property] Get Contract List',
  // props<{payload: string}>()
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
 * Get Management Contract List Actions
 */
export const getContractListByPm = createAction(
  '[Property] Get Contract List By PM',
  props<{payload: string}>()
);

export const getContractListByPmSuccess = createAction(
  '[Property] Get Contract List By PM Success',
  props<{payload: ManagementContract[]}>()
);

export const getContractListByPmFailure = createAction(
  '[Property] Get Contract List By PM Failure',
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
  '[Marketing] Get Property Listing Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property listing') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get Marketing Property Listing Actions
 */
export const getPropertyListingByPm = createAction(
  '[Marketing] Get Property Listing By PM',
  props<{payload: any}>()
);

export const getPropertyListingByPmSuccess = createAction(
  '[Marketing] Get Property Listing By PM Success',
  props<{payload: PropertyListing[]}>()
);

export const getPropertyListingByPmFailure = createAction(
  '[Marketing] Get Property Listing By PM Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property listing') => {
    return ({ payload: { errorMessage } });
  }
);

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
 * Get Property Leasing Agreements By PM  Actions
 */
export const getAllLeasesByPm = createAction(
  '[Leases] Get all leases by PM',
  props<{ payload: any }>()
);

export const getAllLeasesByPmSuccess = createAction(
  '[Leases] Get all leases by PM Success',
  props<{ payload: PropertyLease[] }>()
);

export const getPAllLeasesByPmFailure = createAction(
  '[Leases] Get all leases by PM Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property listing') => {
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
 * Get Property Leasing Tenants By PM  Actions
 */
export const getAllTenantsByPm = createAction(
  '[Leases] Get all tenants by PM',
  props<{ payload: any }>()
);

export const getAllTenantsByPmSuccess = createAction(
  '[Leases] Get all tenants by PM Success',
  props<{payload: PropertyTenant[]}>()
);

export const getAllTenantsByPmFailure = createAction(
  '[Leases] Get all tenants by PM Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property listing') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get Property Rental Application Actions
 */

export const getRentalApplicationList = createAction(
   '[Marketing] Get Rental Application List'
);

export const getRentalApplicationListSuccess = createAction(
  '[Marketing] Get Rental Application List Success',
  props<{payload: RentalApplication[]}> ()
);

export const getRentalApplicationListFailure = createAction(
  '[Marketing] Get Rental Application List Failure',
  (errorMessage = 'Error loading rental application list') => {
    return ({ payload: { errorMessage } });
  }
);


/**
 * Get Property Rental Application By PMActions
 */

export const getRentalApplicationListByPm = createAction(
  '[Marketing] Get Rental Application List by PM',
  props<{payload: any}>()
);

export const getRentalApplicationListByPmSuccess = createAction(
  '[Marketing] Get Rental Application List by PM Success',
  props<{ payload: RentalApplication[] }>()
);

export const getRentalApplicationListByPmFailure = createAction(
  '[Marketing] Get Rental Application List by PM Failure',
  (errorMessage = 'Error loading rental application list') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get all open houses Actions
 */
export const getOpenHouseList = createAction(
  '[Marketing] Get OpenHouse List'
);

export const getOpenHouseListSuccess = createAction(
  '[Marketing] Get OpenHouse List Success',
  props<{payload: OpenHouse[]}>()
);

export const getOpenHouseListFailure = createAction(
  '[Marketing] Get OpenHouse List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading open house list') => {
    return ({ payload: { errorMessage } });
  }
);


/**
 * Get all open houses By PM Actions
 */
export const getOpenHouseListByPm = createAction(
  '[Marketing] Get OpenHouse List by PM',
  props<{ payload: any }>()
);

export const getOpenHouseListByPmSuccess = createAction(
  '[Marketing] Get OpenHouse List by PM Success',
  props<{ payload: OpenHouse[] }>()
);

export const getOpenHouseListByPmFailure = createAction(
  '[Marketing] Get OpenHouse List by PM Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading open house list') => {
    return ({ payload: { errorMessage } });
  }
);



/**
 * Get all rent payments Actions
 */
export const getRentPaymentList = createAction(
  '[Lease] Get Rent Payment List'
);

export const getRentPaymentListSuccess = createAction(
  '[Lease] Get Rent Payment List Success',
  props<{payload: any[]}>()
);

export const getRentPaymentListFailure = createAction(
  '[Lease] Get Rent Payment List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading rent payment list') => {
    return ({ payload: { errorMessage } });
  }
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
 * Get All Vendors Actions
 */
export const getAllVendorsByUser = createAction(
  '[Leases] Get All Vendors By User',
  props<{ payload: any }>()
);

export const getAllVendorsByUserSuccess = createAction(
  '[Leases] Get All Vendors By User Success',
  props<{ payload: Vendor[] }>()
);

export const getAllVendorsByUserFailure = createAction(
  '[Leases] Get All Vendors By User Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading vendors') => {
    return ({ payload: { errorMessage } });
  }
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
 * Get All Work Orders by PM Actions
 */
export const getAllWorkOrderByPm = createAction(
  '[Leases] Get All  Work Orders by PM',
  props<{ payload: any }>()
);

export const getAllWorkOrdersByPmSuccess = createAction(
  '[Leases] Get All Work Orders by PM Success',
  props<{ payload: WorkOrder[] }>()
);

export const getAllWorkOrdersByPmFailure = createAction(
  '[Leases] Get All  Work Orders by PM Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading work orders') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get All Service Request Actions
 */
export const getAllServiceRequests = createAction(
  '[Leases] Get All Service Request'
);

export const getAllServiceRequestsSuccess = createAction(
  '[Leases] Get All Service Request Success',
  props<{payload: ServiceRequest[]}>()
);

export const getAllServiceRequestsFailure = createAction(
  '[Leases] Get All Service Request Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading Service Request') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get All Service Request By PM Actions
 */
export const getAllServiceRequestsByPm = createAction(
  '[Leases] Get All Service Request by PM',
  props<{ payload: any }>()
);

export const getAllServiceRequestsByPmSuccess = createAction(
  '[Leases] Get All Service Request by PM Success',
  props<{ payload: ServiceRequest[] }>()
);

export const getAllServiceRequestsByPmFailure = createAction(
  '[Leases] Get All Service Request by PM Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading Service Request') => {
    return ({ payload: { errorMessage } });
  }
);


/**
 * Get All Invoices
 */
export const getAllInvoices = createAction(
  '[Leases] Get All Invoices'
);

export const getAllInvoicesSuccess = createAction(
  '[Leases] Get All Invoices Success',
  props<{payload: Vendor[]}>()
);

export const getAllInvoicesFailure = createAction(
  '[Leases] Get All Invoices Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading invoices') => {
    return ({ payload: { errorMessage } });
  }
);


/**
 * Get Council List Actions
 */
export const getCouncilList = createAction(
  '[Property] Get Council List'
);

export const getCouncilListSuccess = createAction(
  '[Property] Get Council List Success',
  props<{payload: any[]}>()
);

export const getCouncilListFailure = createAction(
  '[Property] Get Council List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property list') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get Council List by user Actions
 */
export const getCouncilListByUser = createAction(
  '[Property] Get Council List By User',
  props<{ payload: any }>()
);

export const getCouncilListByUserSuccess = createAction(
  '[Property] Get Council List By User Success',
  props<{ payload: any[] }>()
);

export const getCouncilListByUserFailure = createAction(
  '[Property] Get Council List By User Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property list') => {
    return ({ payload: { errorMessage } });
  }
);
