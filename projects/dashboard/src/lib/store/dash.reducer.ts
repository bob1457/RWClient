import * as DashActions from './dash.actions';
import { DashState } from './dash.state';
import { createReducer, Action, on} from '@ngrx/store';


export const initialState: DashState =  { // adapter.getInitialState
  loading: false,
  loaded: false,
  properties: null,
  owners: null,
  contracts: null,
  listings: null,
  tenants: null,
  leases: null,
  errorMessage: null
};

debugger;

const dashReducer = createReducer(
  initialState,

  on(DashActions.getPropertyList, state => {
    return ({
      ...state,
      loading: true,
      loaded: false
    });
  }),

  on(DashActions.getPropertyListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      properties: payload
    });
  }),

  on(DashActions.getPropertyOwnerList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(DashActions.getPropertyOwnerListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      owners: payload
    });
  }),

  on(DashActions.getPropertyOwnerListFailure, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    errorMessage: 'Failed to load property owners'
  })),

  on(DashActions.getContractList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(DashActions.getContractListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      contracts: payload
    });
  }),

  on(DashActions.getContractListFailure, (state) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      contracts: null,
      errorMessage: 'Failed to load contract details'
    });
  }),

  on(DashActions.getPropertyListing, state => {
    return ({
      ...state,
      loading: true,
      loaded: false
    });
  }),

  on(DashActions.getPropertyListingSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      listings: payload
    });
  }),

  on(DashActions.getPropertyOwnerListFailure, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(DashActions.getAllLeases, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(DashActions.getAllLeasesSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      leases: payload
    });
  }),

  on(DashActions.getAllTenants, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(DashActions.getAllTenantsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      tenants: payload
    });
  }),

  on(DashActions.getAllTenantsFailure, (state) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      tenants: null,
      errorMessage: 'Failed to load contract details'
    });
  })

);









export function reducer(state: DashState | undefined, action: Action) {
  return dashReducer(state, action);
}
