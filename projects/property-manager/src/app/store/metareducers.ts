import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['properties', 'property', 'owners', 'selectedOwner', 'contracts'],
    rehydrate: true
  })(reducer);
}
// , 'selectedContract'
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];