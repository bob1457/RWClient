import { Property } from '@lib/app-core';
import * as property from './reducers';
import { createFeatureSelector } from '@ngrx/store';

export interface PropertyState {
  loading: boolean | false;
  loaded: boolean | false;
  properties: Property[] | null;
  property: Property | null;
  errorMessage: string | null;
}

export const reducer = {
  property: property.reducer
};

export const selectPropertyState = createFeatureSelector<PropertyState>('property');
