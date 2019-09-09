import { PropertyLeaseState } from '../lease-state';
import { createReducer, on } from '@ngrx/store';
import * as LeaseActions from '../actions/lease.actions';



export const initialState: PropertyLeaseState =  { // adapter.getInitialState
  loading: false,
  loaded: false,
  leases: null,
  // property: null,
  // owners: null,
  // ownersOfProperty: null,
  // selectedOwner: null,
  // contracts: null,
  // contractsForProperty: null,
  // selectedContract: null,
  errorMessage: null
};

debugger;
const propertyListingReducer = createReducer(
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
      listings: payload
    });
  }));
