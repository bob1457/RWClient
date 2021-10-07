import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['leases', 'selectedLease', 'workorders', 'vendors', 'servierequests', 'rentPayments',
      'tenants', 'invoiceList', 'addendumList', 'noticeList'],
    rehydrate: true
  })(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
