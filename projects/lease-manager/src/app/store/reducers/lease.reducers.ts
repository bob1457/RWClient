import { PropertyLeaseState } from '../lease-state';
import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as LeaseActions from '../actions/lease.actions';
import { getRentPaymentListFailure } from 'projects/dashboard/src/lib/store/dash.actions';

export const lease = 'lease';

export const initialState: PropertyLeaseState =  { // adapter.getInitialState
  loading: false,
  loaded: false,
  leases: null,
  tenants: null,
  // owners: null,
  // ownersOfProperty: null,
  selectedLease: null,
  selectedTenant: null,
  workorders: null,
  selectedworkorder: null,
  vendors: null,
  selectedvendor: null,
  servierequests: null,
  selectedrequest: null,
  rentPayments: null,
  selectedPayment: null,
  invoiceList: null,
  noticeList: null,
  notice: null,
  addendumList: null,
  addendum: null,
  // contracts: null,
  // contractsForProperty: null,
  // selectedContract: null,
  errorMessage: null
};

debugger;
const propertyLeaseReducer = createReducer(
  initialState,

  /**
   * Get lease data
   */
  on(LeaseActions.getAllLeases, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllLeasesSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      leases: payload
    });
  }),

  on(LeaseActions.getAllLeasesByPm, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllLeasesByPmSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      leases: payload
    });
  }),

  on(LeaseActions.getLeaseDetails, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getLeaseDetailsSuccess, (state, { payload }) => {
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      selectedLease: payload
    });
  }),

  /**
   * Get Tenant Data
   */

  on(LeaseActions.getAllTenants, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllTenantsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      tenants: payload
    });
  }),

  on(LeaseActions.getAllTenantsByPm, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllTenantsByPmSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      tenants: payload
    });
  }),

  on(LeaseActions.getTenantDetails, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getTenantDetailsSuccess, (state, { payload }) => {
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      selectedTenant: payload
    });
  }),


  /**
   * Add tenant to lease
   */
   on(LeaseActions.addTenant, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.addTenantSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      tenants: [...state.tenants, payload ]
    });
  }),

  on(LeaseActions.addTenantFailure, (state) => {
    return ({
      ...state,
      loading: false,
      errorMessage: 'Failed to add tenant'
    });
  }),




  /**
   * Add property lease
   */
  on(LeaseActions.addLease, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.addLeaseSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      leases: [...state.leases, payload ]
    });
  }),

  on(LeaseActions.addLeaseFailure, (state) => {
    return ({
      ...state,
      loading: false,
      errorMessage: 'Failed to add lease'
    });
  }),

  /**
   * Update property  lease
   */
  on(LeaseActions.updateLease, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.updateLeaseSuccess, (state, { payload }) => {

    const updatedLeases = state.leases.map(
      item => payload.id === item.id ? payload : item
    );

    return ({
      ...state,
      loading: false,
      loaded: true,
      leases: updatedLeases, // [...state.listings, payload ]
      selectedLease: payload
    });
  }),

  on(LeaseActions.updateLeaseFailure, (state) => {
    return ({
      ...state,
      loading: false,
      errorMessage: 'Failed to add lease'
    });
  }),

  // on(LeaseActions.updateTenantSuccess, (state, { payload }) => {

  //   const updatedLeases = state.leases.map(
  //     item => payload.id === item.id ? payload : item
  //   );
  //   return ({
  //     ...state,
  //     loading: false,
  //     loaded: true,
  //     listings: updatedLeases, // [...state.listings, payload ]
  //     selectedLease: payload
  //   });
  // }),

  /**
   * Update property  lease
   */
  on(LeaseActions.updateTenant, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.updateTenantSuccess, (state, { payload }) => {

    const updatedTenants = state.tenants.map(
      item => payload.id === item.id ? payload : item
    );
    return ({
      ...state,
      loading: false,
      loaded: true,
      leases: updatedTenants, // [...state.listings, payload ]
      selectedTenant: payload
    });
  }),

  /**
   * Get Vendors
   */

  on(LeaseActions.getAllVendors, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllVendorsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      vendors: payload
    });
  }),

  on(LeaseActions.getAllVendorsByUser, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllVendorsByUserSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      vendors: payload
    });
  }),

  on(LeaseActions.getAllVendorsFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    errorMessage: 'Failed to load vendors'
  })),



  on(LeaseActions.getAllWorkOrders, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllWorkOrdersSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      workorders: payload
    });
  }),

  on(LeaseActions.getAllWorkOrdersByPmFailure, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllWorkOrdersByPmSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      workorders: payload
    });
  }),

  on(LeaseActions.updateWorkOrderFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    errorMessage: 'Failed to update work orders'
  })),

  /**
   * Update work order
   */
  on(LeaseActions.updateWorkOrder, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.updateWorkOrderSuccess, (state, { payload }) => {

    const updatedWorkOrders = state.workorders.map(
      item => payload.id === item.id ? payload : item
    );
    return ({
      ...state,
      loading: false,
      loaded: true,
      workorders: updatedWorkOrders, // [...state.listings, payload ]
      selectedworkorder: payload
    });
  }),



  on(LeaseActions.getAllWorkOrdersFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    errorMessage: 'Failed to load work orders'
  })),

  on(LeaseActions.getAllWorkOrdersByPmFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    errorMessage: 'Failed to load work orders'
  })),


  on(LeaseActions.getVendorDetails, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getVendorDetailsSuccess, (state, { payload }) => {
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      selectedvendor: payload
    });
  }),

/**
     * Add vendor
     */
 on(LeaseActions.addVendor, state => ({
  ...state,
  loading: true,
  loaded: false
})),

on(LeaseActions.addVendorSuccess, (state, { payload }) => {
  return ({
    ...state,
    loading: false,
    loaded: true,
    vendors: [...state.vendors, payload ]
  });
}),

on(LeaseActions.addVendorFailure, (state) => {
  return ({
    ...state,
    loading: false,
    errorMessage: 'Failed to add vendor'
  });
}),


  /**
   * Update vendor
   */
  on(LeaseActions.updateVendor, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.updateVendorsSuccess, (state, { payload }) => {

    const updatedVendors = state.vendors.map(
      item => payload.id === item.id ? payload : item
    );
    return ({
      ...state,
      loading: false,
      loaded: true,
      vendors: updatedVendors, // [...state.listings, payload ]
      selectedvendor: payload
    });
  }),

  on(LeaseActions.getWorkOrderDetails, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getWorkOrderDetailsSuccess, (state, { payload }) => {
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      selectedworkorder: payload
    });
  }),


  on(LeaseActions.getAllServiceRequests, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllServiceRequestsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      servierequests: payload
    });
  }),

  on(LeaseActions.getAllServiceRequestsFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    errorMessage: 'Failed to load service requests'
  })),

  on(LeaseActions.getAllServiceRequestsByPm, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllServiceRequestsByPmSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      servierequests: payload
    });
  }),

  on(LeaseActions.getAllServiceRequestsByPmFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    errorMessage: 'Failed to load service requests'
  })),

   /**
     * Add service request
     */
  on(LeaseActions.addServiceRequest, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.addServiceRequestSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      servierequests: [...state.servierequests, payload ]
    });
  }),

  on(LeaseActions.addServiceRequestFailure, (state) => {
    return ({
      ...state,
      loading: false,
      errorMessage: 'Failed to add service request'
    });
  }),


  on(LeaseActions.getServiceRequestDetails, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getServiceRequestrDetailsSuccess, (state, { payload }) => {
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      selectedrequest: payload
    });
  }),

  on(LeaseActions.getServiceRequestFailure, (state, { payload }) => {
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      errorMessage: 'Failed to load service request'
    });
  }),

  /**
   * Rent payments */

  on(LeaseActions.getRentPaymentList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getRentPaymentListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      rentPayments: payload
    });
  }),

  on(LeaseActions.getRentPaymenttDetails, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getRentPaymenttDetailssSuccess, (state, { payload }) => {
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      selectedPayment: payload
    });
  }),

  /**
   * Update rent payment
   */

  on(LeaseActions.updateRentPayment, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.updateRentPaymentSuccess, (state, { payload }) => {

    const updatedRentPayment = state.rentPayments.map(
      item => payload.id === item.id ? payload : item
    );
    return ({
      ...state,
      loading: false,
      loaded: true,
      rentPayments: updatedRentPayment
    });
  }),

  /**
   * Add service request
   */
    on(LeaseActions.addRentPayment, state => ({
      ...state,
      loading: true,
      loaded: false
    })),

    on(LeaseActions.addRentPaymentSuccess, (state, { payload }) => {
      return ({
        ...state,
        loading: false,
        loaded: true,
        rentPayments: [...state.rentPayments, payload ]
      });
    }),

    on(LeaseActions.addRentPaymentFailure, (state) => {
      return ({
        ...state,
        loading: false,
        errorMessage: 'Failed to add rent payment'
      });
    }),

    /**
     * Add work order
     */
    on(LeaseActions.addWorkOrder, state => ({
      ...state,
      loading: true,
      loaded: false
    })),

    on(LeaseActions.addWorkOrderSuccess, (state, { payload }) => {
      return ({
        ...state,
        loading: false,
        loaded: true,
        workorders: [...state.workorders, payload ]
      });
    }),

    on(LeaseActions.addWorkOrderFailure, (state) => {
      return ({
        ...state,
        loading: false,
        errorMessage: 'Failed to add work order'
      });
    }),

    /**
 * Add Invoice
   */
   on(LeaseActions.addInvoice, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.addInvoiceSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      invoiceList: [...state.invoiceList, payload ]
    });
  }),

  /**
  * All invoices */

  on(LeaseActions.getAllInvoices, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllInvoicesSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      invoiceList: payload
    });
  }),

  on(LeaseActions.getAllInvoicesFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false
  })),

  /**
   * Update invoice
   */

   on(LeaseActions.updateInvoice, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.updateInvoiceSuccess, (state, { payload }) => {

    const updatedInvoice = state.invoiceList.map(
      item => payload.id === item.id ? payload : item
    );
    return ({
      ...state,
      loading: false,
      loaded: true,
      invoiceList: updatedInvoice
    });
  }),

  on(LeaseActions.updateInvoiceFailure, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllNoticeForLease, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAllNoticeForLeaseSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      noticeList: payload
    });
  }),

  on(LeaseActions.getAllNoticeForLeaseFailure, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getNoticeDetails, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getNoticeDetailssSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      notice: payload
    });
  }),

  on(LeaseActions.getAllNoticeForLeaseFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false
  })),

  /**
   * Add Notice to lease
   */
  on(LeaseActions.addNotice, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.addNoticeSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      noticeList: [...state.noticeList, payload]
    });
  }),

  /**
   * Update Notice Status
   */

  on(LeaseActions.updateNoticeStatus, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.updateNoticeStatusSuccess, (state, { payload }) => {

    const updatedNotices = state.noticeList.map(
      item => payload.id === item.id ? payload : item
    );
    return ({
      ...state,
      loading: false,
      loaded: true,
      noticeList: updatedNotices
    });
  }),

  on(LeaseActions.updateNoticeStatusFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false
  })),

  /**
   * Add Addedunm to lease
   */
  on(LeaseActions.addAddendum, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.addAddendumSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      addendumList: [...state.addendumList, payload]
    });
  }),

  on(LeaseActions.addAddendumFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false
  })),

  on(LeaseActions.getAddendumDetails, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAddendumDetailsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      addendum: payload
    });
  }),

  on(LeaseActions.getAddendumDetailsFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false
  })),

  on(LeaseActions.getAddendumForLease, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.getAddendumForLeaseSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      addendumList: payload
    });
  }),

  on(LeaseActions.getAddendumForLeaseFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false
  })),



  /**
   * Remove Addendum
   */
  on(LeaseActions.removeAddendum, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.removeAddendumSuccess, (state, { payload }) => {
    const updatedAddendum = state.addendumList.map(
      item => payload.id === item.id ? payload : item
    );

    return ({
      ...state,
      loading: false,
      loaded: true,
      addendumList: updatedAddendum
    });
  }),

  on(LeaseActions.removeAddendumFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false
  })),


  /**
   * Update lease Addendum State
   */
  on(LeaseActions.updateLeaseAddendumState, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(LeaseActions.updateLeaseAddendumStateSuccess, (state, { payload }) => {

    // const updatedLeases = state.leases.map(
    //   item => payload.id === item.id ? payload : item
    // );
    return ({
      ...state,
      loading: false,
      loaded: true,
      // leases: updatedLeases, // [...state.listings, payload ]
      selectedLease: payload
    });
  }),

);

/**
 *
 * State Selectors
 */
export const selectLeaseyState = createFeatureSelector<PropertyLeaseState>(lease);

export const getLoadingStatus = (state: PropertyLeaseState) => state.loading;

export const getLeaseList = (state: PropertyLeaseState) => state.leases;
export const getTenantList = (state: PropertyLeaseState) => state.tenants;
export const getLeaseDetails = (state: PropertyLeaseState) => state.selectedLease;
export const getTenantDetails = (state: PropertyLeaseState) => state.selectedTenant;
export const getVendorList = (state: PropertyLeaseState) => state.vendors;
export const getVendorDetails = (state: PropertyLeaseState) => state.selectedvendor;
export const getServiceRequestList = (state: PropertyLeaseState) => state.servierequests;
export const getServiceRequestDetails = (state: PropertyLeaseState) => state.selectedrequest;
export const getAllWorkOrders = (state: PropertyLeaseState) => state.workorders;
export const getWorkOrderDetails = (state: PropertyLeaseState) => state.selectedworkorder;
export const getRentPaymentList = (state: PropertyLeaseState) => state.rentPayments;
export const getRemtPaymentDetails = (state: PropertyLeaseState) => state.selectedPayment;
export const getInviceList = (state: PropertyLeaseState) => state.invoiceList;
export const getNoticeList = (state: PropertyLeaseState) => state.noticeList;
export const getNoticeDetails = (state: PropertyLeaseState) => state.notice;
export const getAddendumForLease = (state: PropertyLeaseState) => state.addendumList;

export const loadingStatus = createSelector(selectLeaseyState, getLoadingStatus);

export const leaseList = createSelector(selectLeaseyState, getLeaseList);
export const tenantList = createSelector(selectLeaseyState, getTenantList);
export const leaseDetails = createSelector(selectLeaseyState, getLeaseDetails);
export const tenantDetails = createSelector(selectLeaseyState, getTenantDetails);
export const vendorList = createSelector(selectLeaseyState, getVendorList);
export const vendorDetails = createSelector(selectLeaseyState, getVendorDetails);
export const serviceRequestList = createSelector(selectLeaseyState, getServiceRequestList);
export const serviceRequestDetails = createSelector(selectLeaseyState, getServiceRequestDetails);
export const workOrderList = createSelector(selectLeaseyState, getAllWorkOrders);
export const workOrderDetails = createSelector(selectLeaseyState, getWorkOrderDetails);
export const rentPaymentList = createSelector(selectLeaseyState, getRentPaymentList);
export const rentPaymentDetails = createSelector(selectLeaseyState, getRemtPaymentDetails);
export const invoiceList = createSelector(selectLeaseyState, getInviceList);
export const noticeList = createSelector(selectLeaseyState, getNoticeList);
export const noticeDetails = createSelector(selectLeaseyState, getNoticeDetails);
export const adddendumForLease = createSelector(selectLeaseyState, getAddendumForLease);

export function l_reducer(state: PropertyLeaseState | undefined, action: Action) {
    return propertyLeaseReducer(state, action);
  }
