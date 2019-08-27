import { createAction, props } from '@ngrx/store';
import { Property } from '../models/property.model';

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
