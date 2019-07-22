import { createAction, props } from '@ngrx/store';

import { Property } from '@lib/app-core';

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
 * Create Property Actions
 */

export default createAction('[Property] Add Property', props<{
  payload: any;
}>());

export const addPropertySuccess = createAction(
  '[Property] Add Property Success',
  props<{payload: Property}>()
);

export const addPropertyFailure = createAction(
  '[Property] Add Property Failure',
  // props<{payload: any}>()
  (errorMessage = 'Error adding property') => ({ payload: { errorMessage }})

);
