import { PropertyLeaseState } from '../lease-state';
import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as LeaseActions from '../actions/lease.actions';



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
      errorMessage: 'Failed to lease'
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

  on(LeaseActions.getAllVendorsFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    errorMessage: 'Failed to load vendors'
  })),



);

/**
 *
 * State Selectors
 */
export const selectLeaseyState = createFeatureSelector<PropertyLeaseState>('lease');

export const getLoadingStatus = (state: PropertyLeaseState) => state.loading;

export const getLeaseList = (state: PropertyLeaseState) => state.leases;
export const getTenantList = (state: PropertyLeaseState) => state.tenants;
export const getLeaseDetails = (state: PropertyLeaseState) => state.selectedLease;
export const getTenantDetails = (state: PropertyLeaseState) => state.selectedTenant;
export const getVendorList = (state: PropertyLeaseState) => state.vendors;

export const loadingStatus = createSelector(selectLeaseyState, getLoadingStatus);

export const leaseList = createSelector(selectLeaseyState, getLeaseList);
export const tenantList = createSelector(selectLeaseyState, getTenantList);
export const leaseDetails = createSelector(selectLeaseyState, getLeaseDetails);
export const tenantDetails = createSelector(selectLeaseyState, getTenantDetails);
export const vendorList = createSelector(selectLeaseyState, getVendorList);



export function reducer(state: PropertyLeaseState | undefined, action: Action) {
    return propertyLeaseReducer(state, action);
  }
