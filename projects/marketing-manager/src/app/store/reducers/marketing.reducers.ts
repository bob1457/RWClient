import { PropertyListingState } from '../marketing.state';
import { createReducer, on, Action } from '@ngrx/store';
import * as ListingActions from '../actions/marketing.actions';


export const initialState: PropertyListingState =  { // adapter.getInitialState
  loading: false,
  loaded: false,
  listings: null,
  // property: null,
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
  })


);




// Selectors




export function reducer(state: PropertyListingState | undefined, action: Action) {
  return propertyListingReducer(state, action);
}

