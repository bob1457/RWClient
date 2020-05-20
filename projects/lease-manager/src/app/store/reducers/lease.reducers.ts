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
  // selectedOwner: null,
  // contracts: null,
  // contractsForProperty: null,
  // selectedContract: null,
  errorMessage: null
};

debugger;
const propertyLeaseReducer = createReducer(
  initialState,

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

  );

/**
 *
 * State Selectors
 */
export const selectLeaseyState = createFeatureSelector<PropertyLeaseState>('lease');

export const getLeaseList = (state: PropertyLeaseState) => state.leases;

export const leaseList = createSelector(selectLeaseyState, getLeaseList);



export function reducer(state: PropertyLeaseState | undefined, action: Action) {
    return propertyLeaseReducer(state, action);
  }
