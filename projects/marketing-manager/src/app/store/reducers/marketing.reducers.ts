import { PropertyListingState } from '../marketing.state';
import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import * as ListingActions from '../actions/marketing.actions';


export const initialState: PropertyListingState =  { // adapter.getInitialState
  loading: false,
  loaded: false,
  listings: null,
  listing: null,
  applications: null,
  application: null,
  rentalproperties: null,
  propertyImgList: [''],
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

  /**
   * Get property listing
   */
  on(ListingActions.getPropertyListing, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(ListingActions.getPropertyListingSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      listings: payload
    });
  }),




  /**
   * Get all rental properties
   */


  on(ListingActions.getAllRentalProperties, state => ({
    ...state,
    loading: true,
    loaded: false
  })),


  on(ListingActions.getAllRentalPropertiesSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      rentalproperties: payload
    });
  }),





  /**
   * Get property listing details
   */

  on(ListingActions.getPropertyListingDetails, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(ListingActions.getPropertyListingDetailsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      listing: payload
    });
  }),


  /**
   * Add property listing
   */
  on(ListingActions.addPropertyListing, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(ListingActions.addPropertyListingSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      listings: [...state.listings, payload ]
    });
  }),


  /**
   * Add property listing
   */
  on(ListingActions.updatePropertyListing, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(ListingActions.updatePropertyListingSuccess, (state, { payload }) => {

    const updatedListings = state.listings.map(
      item => payload.id === item.id ? payload : item
    );
    return ({
      ...state,
      loading: false,
      loaded: true,
      listings: updatedListings, // [...state.listings, payload ]
      listing: payload
    });
  }),

  /**
   *  Upload property image
   */

  on(ListingActions.uploadPropertyImage, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(ListingActions.uploadPropertyImageSuccess, (state, { payload }) => {
    debugger;
    // const imgList = state.propertyImgList.map(
    //   item => payload.id === item.id ? payload : item
    // );

    return ({
      ...state,
      loading: false,
      loaded: true,
      propertyImgList: [...state.propertyImgList, payload]
      // propertyImgList: state.listing.rentalProperty.propertyImg.push(payload) // [...state.listing.rentalProperty.propertyImg, payload]
    });
  }),

  on(ListingActions.uploadPropertyImageFailure, (state) => {
    return ({
      ...state,
      loading: false,
      errorMessage: 'Failed to upload property image'
    });
  }),

  /**
   * Get rental applications
   */
  on(ListingActions.getRentalApplicationList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(ListingActions.getRentalApplicationListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      applications: payload
    });
  }),

  /**
   * Get rental application details
   */

  on(ListingActions.getRentalApplicationDetails, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(ListingActions.getRentalApplicationDetailsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      application: payload
    });
  })

);




// Selectors
export const selectPropertyListingState = createFeatureSelector<PropertyListingState>('marketing');

export const getLoadingStatus = (state: PropertyListingState) => state.loading;


export const getPropertyListing = (state: PropertyListingState) => state.listings;
export const getPropertyListingDetails = (state: PropertyListingState) => state.listing;
export const getPropertyApplications = (state: PropertyListingState) => state.applications;
export const getPropertyApplicationDetails = (state: PropertyListingState) => state.application;
export const getAllRentalProperties = (state: PropertyListingState) => state.rentalproperties;

export const propertyListing = createSelector(selectPropertyListingState, getPropertyListing);
export const propertyListingDetails = createSelector(selectPropertyListingState, getPropertyListingDetails);
export const propertyApplications = createSelector(selectPropertyListingState, getPropertyApplications);
export const propertyApplicationDetails = createSelector(selectPropertyListingState, getPropertyApplicationDetails);
export const allRentalProperties = createSelector(selectPropertyListingState, getAllRentalProperties);

export const loadingStatus = createSelector(selectPropertyListingState, getLoadingStatus);


export function reducer(state: PropertyListingState | undefined, action: Action) {
  return propertyListingReducer(state, action);
}

