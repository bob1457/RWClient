import { createAction, props } from '@ngrx/store';
import { PropertyListing, PropertyImg, OpenHouse} from '@lib/app-core';
import { RentalApplication } from 'projects/app-core/src/public-api';



debugger;
/**
 * Get Property Listing Actions
 */
export const getPropertyListing = createAction(
  '[Marketing] Get Property Listing'
);

export const getPropertyListingSuccess = createAction(
  '[Marketing] Get Property Listing Success',
  props<{payload: PropertyListing[]}>()
);

export const getPropertyListingFailure = createAction(
  '[Marketing] Get Property Listing Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property listing') => {
    return ({ payload: { errorMessage } });
  }
);

export const getAllRentalProperties = createAction(
  '[Marketing] Get All Rental Properties'
);

export const getAllRentalPropertiesSuccess = createAction(
  '[Marketing] Get All Rental Properties Success',
  props<{payload: PropertyListing[]}>()
);

export const getAllRentalPropertiesFailure = createAction(
  '[Marketing] Get All Rental Properties Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading rental properties') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Upload property images
 */

export const uploadPropertyImage = createAction(
  '[Marketing] Upload Property Image',
  props<{payload: any, rentalPropertyId: any}>()
);

export const uploadPropertyImageSuccess = createAction(
  '[Marketing] Upload Property Image Success',
  props<{payload: any}>()
);

export const uploadPropertyImageFailure = createAction(
  '[Property] Upload Property Image Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error uploading property image') => ({ payload: { errorMessage }})

);

/**
 * Remove property images
 */

export const deletePropertyImage = createAction(
  '[Marketing] Delete Property Image',
  props<{payload: any}>()
);

export const deletePropertyImageSuccess = createAction(
  '[Marketing] Delete Property Image Success',
  props<{payload: any}>()
);

export const deletePropertyImageFailure = createAction(
  '[Property] Delete Property Image Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error deleting property image') => ({ payload: { errorMessage }})

);

/**
 * Get Property Image List Actions
 */
export const getPropertyImageList = createAction(
  '[Marketing] Get Property Image List'
);

export const getPropertyImageListSuccess = createAction(
  '[Marketing] Get Property Image List Success',
  props<{payload: PropertyListing[]}>()
);

export const getPropertyImageListFailure = createAction(
  '[Marketing] Get Property Image List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property listing') => {
    return ({ payload: { errorMessage } });
  }
);


/**
 * Get Property Listing Details Actions
 */
export const getPropertyListingDetails = createAction(
  '[Marketing] Get Property Listing Details',
  props<{payload: number}>()
);

export const getPropertyListingDetailsSuccess = createAction(
  '[Marketing] Get Property Listing Details Success',
  props<{payload: PropertyListing}>()
);

export const getPropertyListingDetailsFailure = createAction(
  '[Marketing] Get Property List Details Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property Details listing') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Add Property Listing Actions
 */

export const addPropertyListing = createAction(
  '[Marketing] Add Property Listing',
  props<{payload: PropertyListing}>()
);

export const addPropertyListingSuccess = createAction(
  '[Marketing] Add Property Listing Success',
  props<{payload: PropertyListing}>()
);

export const addPropertyListingFailure = createAction(
  '[Property] Add Property Listing Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding property') => ({ payload: { errorMessage }})

);

/**
 * Update Property Listing Actions
 */

export const updatePropertyListing = createAction(
  '[Marketing] Update Property Listing',
  props<{payload: PropertyListing}>()
);

export const updatePropertyListingSuccess = createAction(
  '[Marketing] Update Property Listing Success',
  props<{payload: PropertyListing}>()
);

export const updatePropertyListingFailure = createAction(
  '[Property] Update Property Listing Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error updating property') => ({ payload: { errorMessage }})

);

/**
 * Get all rental application List Actions
 */
export const getRentalApplicationList = createAction(
  '[Marketing] Get Rental Applications'
);

export const getRentalApplicationListSuccess = createAction(
  '[Marketing] Get Rental Applications Success',
  props<{payload: RentalApplication[]}>()
);

export const getRentalApplicationListFailure = createAction(
  '[Marketing] Get Rental Applications Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property listing') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get all rental application Details Actions
 */
export const getRentalApplicationDetails = createAction(
  '[Marketing] Get Rental Application Details',
  props<{payload: number}>()
);

export const getRentalApplicationDetailsSuccess = createAction(
  '[Marketing] Get Rental Application Details Success',
  props<{payload: RentalApplication}>()
);

export const getRentalApplicationDetailsFailure = createAction(
  '[Marketing] Get Rental Application Details Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading application details') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Update listing status
 */

export const updatePropertyListingStatus = createAction(
  '[Marketing] Update Property Listing Status',
  props<{payload: any}>()
);
// PropertyListing
export const updatePropertyListingStatusSuccess = createAction(
  '[Marketing] Update Property Listing Status Success',
  props<{payload: PropertyListing}>()
);


/**
 * Get all open houses Actions
 */
export const getOpenHouseList = createAction(
  '[Marketing] Get OpenHouse List'
);

export const getOpenHouseListSuccess = createAction(
  '[Marketing] Get OpenHouse List Success',
  props<{payload: OpenHouse[]}>()
);

export const getOpenHouseListFailure = createAction(
  '[Marketing] Get OpenHouse List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading open house list') => {
    return ({ payload: { errorMessage } });
  }
);


/**
 * Add Open House toy Listing Actions
 */

export const addOpenHouseToListing = createAction(
  '[Marketing] Add Open House to Listing',
  props<{payload: OpenHouse}>()
);

export const addOpenHouseToListingSuccess = createAction(
  '[Marketing] Add Open House to Listing Success',
  props<{payload: OpenHouse}>()
);

export const addOpenHouseToListinggFailure = createAction(
  '[Property] Add Open House to Listing Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding open house to the listing') => ({ payload: { errorMessage }})

);

/**
 * Update Open House to Property Listing Actions
 */

export const updateOpenHouseToListing = createAction(
  '[Marketing] Update Open House to Listing',
  props<{payload: OpenHouse}>()
);

export const updateOpenHouseToistingSuccess = createAction(
  '[Marketing] Update  Open House to Listing Success',
  props<{payload: OpenHouse}>()
);

export const updateOpenHouseToListingFailure = createAction(
  '[Marketing] Update  Open House to Listing Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error updating open house') => ({ payload: { errorMessage }})

);



export const updatePropertyListingStatusFailure = createAction(
  '[Property] Update Property Listing Status Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error updating property') => ({ payload: { errorMessage }})
);
