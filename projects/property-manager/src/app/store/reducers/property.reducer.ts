import { GetStatus } from './../../../../../auth/src/lib/store/auth.actions';
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
  }),

  on(PropertyActions.addProperty, (state) => {
    return ({
      ...state,
      loading: true
      // property: payload
    });
  }),

  on(PropertyActions.addPropertySuccess, (state, {payload}) => {
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      properties: [...state.properties, payload ] // ,
      // property: payload
    });
  }),

  on(PropertyActions.addPropertyFailure, (state) => {
    return ({
      ...state,
      loading: true,
      errorMessage: 'Failed to add property'
    });
  }),

  on(PropertyActions.updateProperty, (state) => {
    return ({
      ...state,
      loading: true
      // property: payload
    });
  }),

  on(PropertyActions.updatePropertySuccess, (state, {payload}) => {
    debugger;
    const index = state.properties.findIndex(x => x.id === payload.id);
    return ({
      ...state,
      loading: false,
      loaded: true,
      properties: [...state.property[index], payload ] // ,
      // property: payload
    });
  }),

  on(PropertyActions.updatePropertyFailure, (state) => {
    return ({
      ...state,
      loading: true,
      errorMessage: 'Failed to update property'
    });
  }),

  on(PropertyActions.updatePropertyStatus, (state) => {
    return ({
      ...state,
      loading: true
      // property: payload
    });
  }),

  on(PropertyActions.updatePropertyStatusSuccess, (state, {payload}) => {
    const index = state.properties.findIndex(x => x.id === payload.id);
    return ({
      ...state,
      loading: false,
      properties: [...state.property[index].status, payload.status]
    });
  }),

  on(PropertyActions.updatePropertyStatusFailure, (state) => {
    return ({
      ...state,
      loading: false,
      // property: payload
      errorMessage: 'Failed to update property status'
    });
  }),

  on(PropertyActions.removeProperty, (state) => {
    return ({
      ...state,
      loading: true
      // property: payload
    });
  }),

  on(PropertyActions.removePropertySuccess, (state, {payload}) => {
    debugger;
    const index = state.properties.findIndex(x => x.id === payload.propertyId);
    return ({
      ...state,
      loading: false,
      properties: [...state.property[index].isActive, payload.isActive]
    });
  }),

  on(PropertyActions.removePropertyFailure, (state) => {
    return ({
      ...state,
      loading: false,
      // property: payload
      errorMessage: 'Failed to update property status'
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
