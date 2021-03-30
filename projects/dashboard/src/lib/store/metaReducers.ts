import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [
      'propertyImgList',
      'properties',
      'owners',
      'contracts',
      'listings',
      'tenants',
      'leases',
      'applications',
      'workOrders',
      'openHouses'
  ],
    rehydrate: true
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
