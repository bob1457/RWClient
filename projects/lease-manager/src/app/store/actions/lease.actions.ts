import { createAction, props } from '@ngrx/store';
import { PropertyLease, PropertyTenant, WorkOrder, Vendor } from '@lib/app-core';
import { ServiceRequest } from 'projects/app-core/src/lib/leasing/models/service-request.model';

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

export const getAllLeasesByPm = createAction(
  '[Leases] Get all leases by PM',
  props<{ payload: any }>()
);

export const getAllLeasesByPmSuccess = createAction(
  '[Leases] Get all leasess by PM Success',
  props<{ payload: PropertyLease[] }>()
);

export const getPAllLeasesByPmFailure = createAction(
  '[Leases] Get all leases Failure by PM',
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

export const getAllTenantsByPm = createAction(
  '[Leases] Get all tenants by PM',
  props<{ payload: any }>()
);

export const getAllTenantsByPmSuccess = createAction(
  '[Leases] Get all tenants by PM Success',
  props<{ payload: PropertyTenant[] }>()
);

export const getAllTenantsByPmFailure = createAction(
  '[Leases] Get all tenants by PM Failure',
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

export const getAllWorkOrdersByPm = createAction(
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
 * Update Invoice
 */

export const updateInvoice = createAction(
  '[Leases] Update Invoice',
  props<{payload: any}>()
);

export const updateInvoiceSuccess = createAction(
  '[Leases] Update Invoice Success',
  props<{payload: any}>()
);

export const updateInvoiceFailure = createAction(
  '[Leases] Update Invoice Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error updating invoice') => ({ payload: { errorMessage }})

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

/**
 * Add Service Request Actions
 */

export const addServiceRequest = createAction(
  '[Leases] Add Service Request',
  props<{payload: ServiceRequest}>()
);

export const addServiceRequestSuccess = createAction(
  '[Leases] Add Service Request Success',
  props<{payload: ServiceRequest}>()
);

export const addServiceRequestFailure = createAction(
  '[[Leases] Add Service Request Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding Service Request') => ({ payload: { errorMessage }})

);



/**
 * Add Invoice
 */

export const addInvoice = createAction(
  '[Leases] Add Invoice',
  props<{payload: any}>()
);

export const addInvoiceSuccess = createAction(
  '[Leases] Add Invoice Success',
  props<{payload: any}>()
);

export const addInvoiceFailure = createAction(
  '[[Leases] Add Invoice Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding Invoice') => ({ payload: { errorMessage }})

);

/**
 * Get All Invoices
 */
export const getAllInvoices = createAction(
  '[Leases] Get All Invoices'
);

export const getAllInvoicesSuccess = createAction(
  '[Leases] Get All Invoices Success',
  props<{payload: any[]}>()
);

export const getAllInvoicesFailure = createAction(
  '[Leases] Get All Invoices Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading invoices') => {
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
 * Get Service Request Details Actions
 */
export const getServiceRequestDetails = createAction(
  '[Leases] Get Service Request Details',
  props<{payload: number}>()
);

export const getServiceRequestrDetailsSuccess = createAction(
  '[Leases] Get Service Request Details Success',
  props<{payload: ServiceRequest}>()
);

export const getServiceRequestFailure = createAction(
  '[Leases] Get Service Request Details Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading Service Request details') => {
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
 * Get Rent Payment Details Actions
 */
export const getRentPaymenttDetails = createAction(
  '[Leases] Get Rent Payment Details',
  props<{payload: number}>()
);

export const getRentPaymenttDetailssSuccess = createAction(
  '[Leases] Get Rent Payment Details Success',
  props<{payload: ServiceRequest}>()
);

export const getRentPaymenttDetailsFailure = createAction(
  '[Leases] Get Rent Payment Details Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading rent paymentt details') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Add Rent Payment Actions
 */

export const addRentPayment = createAction(
  '[Leases] Add Rent Payment',
  props<{payload: ServiceRequest}>()
);

export const addRentPaymentSuccess = createAction(
  '[Leases] Add Rent Payment Success',
  props<{payload: ServiceRequest}>()
);

export const addRentPaymentFailure = createAction(
  '[[Leases] Add Rent Payment Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding rent payment') => ({ payload: { errorMessage }})

);

/**
 * Update Rent Payment Actions
 */

export const updateRentPayment = createAction(
  '[Leases] Update Rent Payment',
  props<{payload: ServiceRequest}>()
);

export const updateRentPaymentSuccess = createAction(
  '[Leases] Update Rent Payment Success',
  props<{payload: ServiceRequest}>()
);

export const updateRentPaymentFailure = createAction(
  '[[Leases] Update Rent Payment Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error updating rent payment') => ({ payload: { errorMessage }})

);






















export const updateTenantFailure = createAction(
  '[Leases] Update Tenant Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error updating property') => ({ payload: { errorMessage }})

);

