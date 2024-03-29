import { createReducer, Action, createFeatureSelector, on, createSelector } from '@ngrx/store';
import { PropertyState } from '../property.state';

import * as PropertyActions from '../actions/property.actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const property = 'property';
// const adapter: EntityAdapter<Property> = createEntityAdapter<Property>();

// tslint:disable-next-line:one-variable-per-declaration
export const initialState: PropertyState =  { // adapter.getInitialState
  loading: false,
  loaded: false,
  properties: null,
  property: null,
  owners: null,
  ownersOfProperty: null,
  selectedOwner: null,
  contracts: null,
  councils: null,
  council: null,
  contractsForProperty: null,
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

  on(PropertyActions.getPropertyListByPm, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getPropertyLisByPmtSuccess, (state, { payload }) => {
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
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      property: payload,
      ownersOfProperty: payload.ownerList, // ,
      contractsForProperty: payload.contractList
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
      loading: true,
      loaded: false
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
      properties: updatedProperties, // [...state.property[index], payload ] // ,
      property: payload
    });
  }),

  on(PropertyActions.getCouncilList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getCouncilListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      councils: payload
    });
  }),

  on(PropertyActions.getCouncilListByUser, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getCouncilListByUserSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      councils: payload
    });
  }),


  on(PropertyActions.updateCouncil, (state) => {
    return ({
      ...state,
      loading: true,
      loaded: false
      // property: payload
    });
  }),

  on(PropertyActions.updateCouncilSuccess, (state, {payload}) => {
    debugger;
    const index = state.councils.findIndex(x => x.id === payload.id);

    const updatedCouncils = state.councils.map(
      item => payload.id === item.id ? payload : item
    );


    return ({
      ...state,
      loading: false,
      loaded: true,
      councils: updatedCouncils, // [...state.property[index], payload ] // ,
      council: payload
    });
  }),


  on(PropertyActions.updatePropertyFailure, (state) => {
    return ({
      ...state,
      loading: false,
      errorMessage: 'Failed to update property'
    });
  }),

  on(PropertyActions.addCouncil, (state) => {
    return ({
      ...state,
      loading: true,
      loaded: false
      // property: payload
    });
  }),

  on(PropertyActions.addCouncilSuccess, (state, {payload}) => {
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      councils: [...state.councils, payload ] // ,
      // property: payload
    });
  }),

  on(PropertyActions.addCouncilFailure, (state) => {
    return ({
      ...state,
      loading: true,
      errorMessage: 'Failed to add strata council'
    });
  }),

  on(PropertyActions.getCouncilDetails, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getCouncilDetailsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      council: payload
    });
  }),

  on(PropertyActions.getCouncilDetailsFailure, (state) => {
    return ({
      ...state,
      loading: false,
      loaded: false,
      selectedOwner: null,
      errorMessage: 'Failed to load property owner details'
    });
  }),

  on(PropertyActions.updatePropertyStatus, (state) => {
    return ({
      ...state,
      loading: true,
      loaded: false
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

  on(PropertyActions.getPropertyOwnerListByPm, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getPropertyOwnerListByPmSuccess, (state, { payload }) => {
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

  on(PropertyActions.updatePropertyOwner, (state) => {
    return ({
      ...state,
      loading: true,
      loaded: false
      // property: payload
    });
  }),

  on(PropertyActions.updatePropertyOwnerSuccess, (state, {payload}) => {
    debugger;
    // const index = state.owners.findIndex(x => x.id === payload.id);

    const updatedOwners = state.owners.map(
      item => payload.id === item.id ? payload : item
    );


    return ({
      ...state,
      loading: false,
      loaded: true,
      owners: updatedOwners, // [...state.property[index], payload ] // ,
      selectedOwner: payload
    });
  }),

  on(PropertyActions.updatePropertyOwnerFailure, (state) => {
    return ({
      ...state,
      loading: false,
      errorMessage: 'Failed to update property owner'
    });
  }),

  on(PropertyActions.removePropertyOwner, (state) => {
    return ({
      ...state,
      loading: true
      // property: payload
    });
  }),

  on(PropertyActions.removePropertyOwnerSuccess, (state, {payload}) => {
    debugger;
    // const index = state.properties.findIndex(x => x.id === payload.propertyId);

    return ({
      ...state,
      loading: false,
      owners: [...state.owners.filter(x => x.id !== payload.propertyOwnerId )] // [...state.property[index].isActive, payload.isActive]
    });
  }),

  on(PropertyActions.removePropertyOwnerFailure, (state) => {
    return ({
      ...state,
      loading: false,
      // property: payload
      errorMessage: 'Failed to remove property owner'
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

  on(PropertyActions.getContractListByPm, state => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getContractListByPmSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      contracts: payload
    });
  }),

  on(PropertyActions.getContractListByPmFailure, (state) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      contracts: null,
      errorMessage: 'Failed to load contract details'
    });
  }),

on(PropertyActions.getContractDetails, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),

  on(PropertyActions.getContractDetailsSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      selectedContract: payload
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

  on(PropertyActions.addPropertyOwner, (state) => {
    return ({
      ...state,
      loading: true,
      loaded: false
      // property: payload
    });
  }),

  on(PropertyActions.addManagementContractSuccess, (state, {payload}) => {
    debugger;
    return ({
      ...state,
      loading: false,
      loaded: true,
      contracts: [...state.contracts, payload ] // ,
      // property: payload
    });
  }),

  on(PropertyActions.addManagementContractFailure, (state) => {
    return ({
      ...state,
      loading: true,
      errorMessage: 'Failed to add contract'
    });
  }),


  on(PropertyActions.updateContract, (state) => {
    return ({
      ...state,
      loading: true,
      loaded: false
      // property: payload
    });
  }),

  on(PropertyActions.updateContractSuccess, (state, {payload}) => {
    debugger;

    // Load updated item to the list
    const updatedContracts = state.contracts.map(
      item => payload.id === item.id ? payload : item
    );


    return ({
      ...state,
      loading: false,
      loaded: true,
      contracts: updatedContracts, // [...state.property[index], payload ] // ,
      selectedContract: payload
    });
  }),

  on(PropertyActions.updateContractFailure, (state) => {
    return ({
      ...state,
      loading: false,
      errorMessage: 'Failed to update contract'
    });
  }),
);

/**
 *
 * State Selectors
 */
export const selectPropertyState = createFeatureSelector<PropertyState>(property);

export const getLoadingStatus = (state: PropertyState) => state.loading;

export const getPropertyList = (state: PropertyState) => state.properties;
export const getOwnerList = (state: PropertyState) => state.owners;
export const getContractList = (state: PropertyState) => state.contracts;
export const getPropertyDetails = (state: PropertyState) => state.property;
export const getOwnerDetails = (state: PropertyState) => state.selectedOwner;
export const getContractDetails = (state: PropertyState) => state.selectedContract;
export const getCouncilList = (state: PropertyState) => state.councils;
export const getCouncilDetails = (state: PropertyState) => state.council;

export const loadingStatus = createSelector(selectPropertyState, getLoadingStatus);

export const ownerList = createSelector(selectPropertyState, getOwnerList);
export const propertyList = createSelector(selectPropertyState, getPropertyList);
export const contractList = createSelector(selectPropertyState, getContractList);
// export const propertyDetails = (id: any) => createSelector(selectPropertyState, getPropertyList => getPropertyList[id]);
export const propertyDetrails = createSelector(selectPropertyState, getPropertyDetails);
export const councilDetails = createSelector(selectPropertyState, getCouncilDetails);
// export const ownerDetails = (id: any) => createSelector(getOwnerDetails, (ownerList) => {
//   if (ownerList) {
//     return ownerList.find(item => {
//       return item.id === id;
//     });
//     } else {
//     return {};
//   }
//   });
export const ownerDetails = createSelector(selectPropertyState, getOwnerDetails);
export const contractDetails = createSelector(selectPropertyState, getContractDetails);
export const councilList = createSelector(selectPropertyState, getCouncilList);





export function p_reducer(state: PropertyState | undefined, action: Action) {
  return propertyReducer(state, action);
}


