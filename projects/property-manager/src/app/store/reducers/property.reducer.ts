import { loading } from "./../../../../../auth/src/lib/store/auth.reducers";
import { createReducer, Action, createFeatureSelector, on } from "@ngrx/store";
import { PropertyState } from "../property.state";

import * as PropertyActions from "../actions/property.actions";

export const initialState: PropertyState = {
  loading: false,
  loaded: false,
  properties: null,
  property: null,
  errorMessage: null
};
debugger;
const propertyReducer = createReducer(
  initialState,

  on(PropertyActions.getPropertyList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getPropertyListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      properties: payload
    });
  }),

on(PropertyActions.getPropertyDetails, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getPropertyDetailsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      property: payload
    });
  }),

  on(PropertyActions.getPropertyDetailsFailure, (state) => {
    return ({
      ...state,
      loading: false,
      loaded: false,
      property: null,
      errorMessage: 'Failed to load property details'
    });
  })

);

/**
 *
 * State Selectors
 */

export const getPropertyList = (state: PropertyState) => state.properties;

export function reducer(state: PropertyState | undefined, action: Action) {
  return propertyReducer(state, action);
}

export const selectPropertyState = createFeatureSelector<PropertyState>('property');
