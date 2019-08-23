import { Property } from './../../../../../../dist/app-core/lib/property/models/property.model.d';
import { createReducer, Action, createFeatureSelector, on, createSelector } from '@ngrx/store';
import { PropertyState } from '../property.state';

import * as PropertyActions from '../actions/property.actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

// const adapter: EntityAdapter<Property> = createEntityAdapter<Property>();

// tslint:disable-next-line:one-variable-per-declaration
export const initialState: PropertyState =  { // adapter.getInitialState
  loading: false,
  loaded: false,
  properties: null,
  property: null,
  owners: null,
  selectedOwner: null,
  contracts: null,
  selectedContract: null,
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

    const updatedProperties = state.properties.map(
      item => payload.id === item.id ? payload : item
    );


    return ({
      ...state,
      loading: false,
      loaded: true,
      properties: updatedProperties // [...state.property[index], payload ] // ,
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
    debugger;
    const index = state.properties.findIndex(x => x.id === payload.id);
    // state.properties[index] = payload;
    // state.properties[index].status = payload.status;

    const updatedProperties = state.properties.map(
      item => payload.id === item.id ? payload : item
    );

    return ({
      ...state,
      loading: false,
      properties: updatedProperties // [...state.property[index], payload]
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
    // const index = state.properties.findIndex(x => x.id === payload.propertyId);

    return ({
      ...state,
      loading: false,
      properties: [...state.properties.filter(x => x.id !== payload.propertyId )] // [...state.property[index].isActive, payload.isActive]
    });
  }),

  on(PropertyActions.removePropertyFailure, (state) => {
    return ({
      ...state,
      loading: false,
      // property: payload
      errorMessage: 'Failed to remove property status'
    });
  }),

  on(PropertyActions.getPropertyOwnerList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getPropertyOwnerListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      owners: payload
    });
  }),

  on(PropertyActions.getPropertyOwnerDetails, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getPropertyOwnerDetailsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      selectedOwner: payload
    });
  }),

  on(PropertyActions.getPropertyOwnerDetailsFailure, (state) => {
    return ({
      ...state,
      loading: false,
      loaded: false,
      selectedOwner: null,
      errorMessage: 'Failed to load property owner details'
    });
  }),

  on(PropertyActions.addPropertyOwner, (state) => {
    return ({
      ...state,
      loading: true
      // property: payload
    });
  }),

  on(PropertyActions.addPropertyOwnerSuccess, (state, {payload}) => {
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      owners: [...state.owners, payload ] // ,
      // property: payload
    });
  }),

  on(PropertyActions.addPropertyOwnerFailure, (state) => {
    return ({
      ...state,
      loading: true,
      errorMessage: 'Failed to add property'
    });
  }),












  on(PropertyActions.getContractList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getContractListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      contracts: payload
    });
  }),

  on(PropertyActions.getContractListFailure, (state) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      contracts: null,
      errorMessage: 'Failed to load contract details'
    });
  }),

// on(PropertyActions.getContractDetails, (state) => ({
//     ...state,
//     loading: true,
//     loaded: false
//   })),

//   on(PropertyActions.getContractDetailsSuccess, (state, { payload }) => {
//     return ({
//       ...state,
//       loading: false,
//       loaded: true,
//       selectedContract: payload
//     });
//   }),

//   on(PropertyActions.getPropertyDetailsFailure, (state) => {
//     return ({
//       ...state,
//       loading: false,
//       loaded: false,
//       selectedContract: null,
//       errorMessage: 'Failed to load contract details'
//     });
//   }),

//   on(PropertyActions.addPropertyOwner, (state) => {
//     return ({
//       ...state,
//       loading: true
//       // property: payload
//     });
//   }),

//   on(PropertyActions.addManagementContractSuccess, (state, {payload}) => {
//     debugger;
//     return ({
//       ...state,
//       loading: false,
//       loaded: true,
//       contracts: [...state.contracts, payload ] // ,
//       // property: payload
//     });
//   }),

//   on(PropertyActions.addManagementContractFailure, (state) => {
//     return ({
//       ...state,
//       loading: true,
//       errorMessage: 'Failed to add property'
//     });
//   }),


//   on(PropertyActions.updateContract, (state) => {
//     return ({
//       ...state,
//       loading: true
//       // property: payload
//     });
//   }),

//   on(PropertyActions.updateContractSuccess, (state, {payload}) => {
//     debugger;

//     const updatedContracts = state.contracts.map(
//       item => payload.id === item.id ? payload : item
//     );


//     return ({
//       ...state,
//       loading: false,
//       loaded: true,
//       contracts: updatedContracts // [...state.property[index], payload ] // ,
//       // property: payload
//     });
//   }),

//   on(PropertyActions.updatePropertyFailure, (state) => {
//     return ({
//       ...state,
//       loading: true,
//       errorMessage: 'Failed to update contract'
//     });
//   }),
);

/**
 *
 * State Selectors
 */
export const selectPropertyState = createFeatureSelector<PropertyState>('property');

export const getPropertyList = (state: PropertyState) => state.properties;
export const getOwnerList = (state: PropertyState) => state.owners;

export const ownerList = createSelector(selectPropertyState, getOwnerList);
export const propertyList = createSelector(selectPropertyState, getPropertyList);

export function reducer(state: PropertyState | undefined, action: Action) {
  return propertyReducer(state, action);
}


