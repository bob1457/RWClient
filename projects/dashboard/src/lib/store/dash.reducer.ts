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
  workorders: null,
  openHouses: null,
  rentPayments: null,
  vendors: null,
  servierequests: null,
  invoiceList: null,
  errorMessage: null,
  councilList: null
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

  on(DashActions.getPropertyListByPm, state => {
    return ({
      ...state,
      loading: true,
      loaded: false
    });
  }),

  on(DashActions.getPropertyListByPmSuccess, (state, { payload }) => {
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

  on(DashActions.getPropertyOwnerListByPm, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(DashActions.getPropertyOwnerListByPmSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      owners: payload
    });
  }),

  on(DashActions.getPropertyOwnerListByPmFailure, (state) => ({
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

  on(DashActions.getContractListByPm, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(DashActions.getContractListByPmSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      contracts: payload
    });
  }),

  on(DashActions.getContractListByPmFailure, (state) => {
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

  on(DashActions.getPropertyListingByPm, state => {
    return ({
      ...state,
      loading: true,
      loaded: false
    });
  }),

  on(DashActions.getPropertyListingByPmSuccess, (state, { payload }) => {
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
      errorMessage: 'Failed to load application details'
    });
  }),

  on(DashActions.getRentalApplicationListByPm, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(DashActions.getRentalApplicationListByPmSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      applications: payload
    });
  }),

  on(DashActions.getRentalApplicationListByPmFailure, (state) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      applications: null,
      errorMessage: 'Failed to load application details'
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
   * Get all open houses
   */


  on(DashActions.getOpenHouseListByPm, state => ({
    ...state,
    loading: true,
    loaded: false
  })),


  on(DashActions.getOpenHouseListByPmSuccess, (state, { payload }) => {
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
  }),

  /**
   * Get all vendor list
   */


   on(DashActions.getAllVendors, state => ({
    ...state,
    loading: true,
    loaded: false
  })),


  on(DashActions.getAllVendorsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      vendors: payload
    });
  }),

  /**
   * Get all workk order list
   */


   on(DashActions.getAllWorkOrders, state => ({
    ...state,
    loading: true,
    loaded: false
  })),


  on(DashActions.getAllWorkOrdersSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      workorders: payload
    });
  }),

  /**
   * Get all service request list
   */


   on(DashActions.getAllServiceRequests, state => ({
    ...state,
    loading: true,
    loaded: false
  })),


  on(DashActions.getAllServiceRequestsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      servierequests: payload
    });
  }),

/**
  * All invoices */

   on(DashActions.getAllInvoices, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(DashActions.getAllInvoicesSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      invoiceList: payload
    });
  }),

  on(DashActions.getAllInvoicesFailure, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  /**
   * Get all council list
   */

  on(DashActions.getCouncilList, state => {
    return ({
      ...state,
      loading: true,
      loaded: false
    });
  }),

  on(DashActions.getCouncilListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      councilList: payload
    });
  }),


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

const  AllVendors = (state: DashState) => state.vendors;
const  AllworkOrders = (state: DashState) => state.workorders;
const  AllServiceRequests = (state: DashState) => state.servierequests;
const  AllInvoices = (state: DashState) => state.invoiceList;
const  AllCouncils = (state: DashState) => state.councilList;

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

export const VendorList = createSelector(getDashState, AllVendors);
export const WorkOrderList = createSelector(getDashState, AllworkOrders);
export const ServiceRequestList = createSelector(getDashState, AllServiceRequests);
export const InvoiceList = createSelector(getDashState, AllInvoices);
export const CouncilList = createSelector(getDashState, AllCouncils);

export const loadingStatus = createSelector(getDashState, loading);




export function reducer(state: DashState | undefined, action: Action) {
  return dashReducer(state, action);
}
