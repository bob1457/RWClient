import { createAction, props } from '@ngrx/store';

import { Property, PropertyStatus } from '@lib/app-core';
import { PropertyOwner } from 'projects/app-core/src/lib/property/models/property-owner.model';


debugger;
/**
 * Get Property List Actions
 */
export const getPropertyList = createAction(
  '[Property] Get Property List'
);

export const getPropertyListSuccess = createAction(
  '[Property] Get Property List Success',
  props<{payload: Property[]}>()
);

export const getPropertyListFailure = createAction(
  '[Property] Get Property List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property list') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Get Property Details Actions
 */
export const getPropertyDetails = createAction(
  '[Property] Get Property Details',
  props<{payload: number}>()
);

export const getPropertyDetailsSuccess = createAction(
  '[Property] Get Property Details Success',
  props<{payload: Property}>()
);

export const getPropertyDetailsFailure = createAction(
  '[Property] Get Property Details Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property details') => {
    return ({ payload: { errorMessage } });
  }
);

/**
 * Add Property Actions
 */

export const addProperty = createAction(
  '[Property] Add Property',
  props<{payload: Property}>()
);

export const addPropertySuccess = createAction(
  '[Property] Add Property Success',
  props<{payload: Property}>()
);

export const addPropertyFailure = createAction(
  '[Property] Add Property Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding property') => ({ payload: { errorMessage }})

);

/**
 * Update Property Actions
 */

export const updateProperty = createAction(
  '[Property] Update Property',
  props<{payload: Property}>()
);

export const updatePropertySuccess = createAction(
  '[Property] Update Property Success',
  props<{payload: Property}>()
);

export const updatePropertyFailure = createAction(
  '[Property] Update Property Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding property') => ({ payload: { errorMessage }})

);

export const updatePropertyStatus = createAction(
  '[Property] Update Property Status',
  props<{payload: PropertyStatus}>()
);

export const updatePropertyStatusSuccess = createAction(
  '[Property] Update Property Status',
  props<{payload: PropertyStatus}>()
);

export const updatePropertyStatusFailure = createAction(
  '[Property] Update Property Status',
  // props<{payload: PropertyStatus}>()
  (errorMessage = 'Error adding property') => ({ payload: { errorMessage }})
);


export const removeProperty = createAction(
  '[Property] Remove Property Status',
  props<{payload: any}>()
);

export const removePropertySuccess = createAction(
  '[Property] Remove Property Status',
  props<{payload: any}>()
);

export const removePropertyFailure = createAction(
  '[Property] Remove Property Status',
  // props<{payload: PropertyStatus}>()
  (errorMessage = 'Error adding property') => ({ payload: { errorMessage }})
);


/**
 * Get Property Owner List Actions
 */

export const getPropertyOwnerList = createAction(
  '[Property] Get Property Owner List'
);

export const getPropertyOwnerListSuccess = createAction(
  '[Property] Get Property List Success',
  props<{payload: PropertyOwner[]}>()
);

export const getPropertyOwnerListFailure = createAction(
  '[Property] Get Property List Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error loading property list') => {
    return ({ payload: { errorMessage } });
  }
);
