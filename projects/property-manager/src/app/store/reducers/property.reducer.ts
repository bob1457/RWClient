import { loading } from './../../../../../auth/src/lib/store/auth.reducers';
import { createReducer, Action } from "@ngrx/store";
import { PropertyState } from '../property.state';

export const initialState: PropertyState = {
  loading: false,
  loaded: false,
  properties: null
};

const propertyReducer = createReducer(
  initialState,

);


export function reducer(state: PropertyState | undefined, action: Action) {
  return propertyReducer(state, action);
}
