import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['properties',  'owners', 'selectedOwner', 'contracts'],
    rehydrate: true
  })(reducer);
}
// , 'selectedContract''property',
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
