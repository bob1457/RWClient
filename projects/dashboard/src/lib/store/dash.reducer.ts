import * as DashActions from './dash.actions';
import { DashState } from './dash.state';
import { createReducer, Action, on, createFeatureSelector, createSelector} from '@ngrx/store';



export const initialState: DashState =  { // adapter.getInitialState
  loading: false,
  loaded: false,
  properties: null,
  propertyImgList: null,
  owners: null,
  contracts: null,
  listings: null,
  tenants: null,
  leases: null,
  applications: null,
  workOrders: null,
  openHouses: null,
  rentPayments: null,
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

   /**
   * Get property imge list
   */
  on(DashActions.getPropertyImageList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(DashActions.getPropertyImageListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      propertyImgList: payload
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
    loading: false,
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
    loading: false,
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
  }),

  on(DashActions.getRentalApplicationList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(DashActions.getRentalApplicationListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      applications: payload
    });
  }),

  on(DashActions.getRentalApplicationListFailure, (state) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      applications: null,
      errorMessage: 'Failed to load contract details'
    });
  }),

  /**
   * Get all open houses
   */


  on(DashActions.getOpenHouseList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),


  on(DashActions.getOpenHouseListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      openHouses: payload
    });
  }),

  /**
   * Get all rent payment
   */


  on(DashActions.getRentPaymentList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),


  on(DashActions.getRentPaymentListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      rentPayments: payload
    });
  })

);

/**
 *
 * Selectors
 */

// Getting read-only data managed by current "Reducer"
const loading = (state: DashState) => state.loading;
const AllProperties = (state: DashState) => state.properties;
const AllContracts = (state: DashState) => state.contracts;
const AllTenants = (state: DashState) => state.tenants;
const AllRentals = (state: DashState) => state.leases;
const AllOwners = (state: DashState) => state.owners;
const AllOpenhouess = (state: DashState) => state.openHouses;

const AllListings = (state: DashState) => state.listings;
const AllRentalApps = (state: DashState) => state.applications;

export const AllPropertyImgs = (state: DashState) => state.propertyImgList;
export const AllRentPaymentHistory = (state: DashState) => state.rentPayments;

// Select required slice of state
export const getDashState = createFeatureSelector<DashState>('dashboard');

// Select the attribute of the state in the slice
export const PropertyList = createSelector(getDashState, AllProperties);
export const ContractList = createSelector(getDashState, AllContracts);
export const TenantList = createSelector(getDashState, AllTenants);
export const RentalList = createSelector(getDashState, AllRentals);
export const OwnerList = createSelector(getDashState, AllOwners);
export const OpenHouseList = createSelector(getDashState, AllOpenhouess);

export const MarketingList = createSelector(getDashState, AllListings);
export const RentalAppList = createSelector(getDashState, AllRentalApps);
export const PropertyImgList = createSelector(getDashState, AllPropertyImgs);
export const RentPaymentHistory = createSelector(getDashState, AllRentPaymentHistory);

export const loadingStatus = createSelector(getDashState, loading);




export function reducer(state: DashState | undefined, action: Action) {
  return dashReducer(state, action);
}