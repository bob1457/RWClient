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

  );

/**
 *
 * State Selectors
 */
export const selectLeaseyState = createFeatureSelector<PropertyLeaseState>('lease');

export const getLeaseList = (state: PropertyLeaseState) => state.leases;
export const getTenantList = (state: PropertyLeaseState) => state.tenants;
export const getLeaseDetails = (state: PropertyLeaseState) => state.selectedLease;
export const getTenantDetails = (state: PropertyLeaseState) => state.selectedTenant;

export const leaseList = createSelector(selectLeaseyState, getLeaseList);
export const tenantList = createSelector(selectLeaseyState, getTenantList);
export const leaseDetails = createSelector(selectLeaseyState, getLeaseDetails);
export const tenantDetails = createSelector(selectLeaseyState, getTenantDetails);



export function reducer(state: PropertyLeaseState | undefined, action: Action) {
    return propertyLeaseReducer(state, action);
  }
