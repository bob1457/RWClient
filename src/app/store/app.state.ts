// import { PropertyState } from './../../../projects/property-manager/src/app/store/property.state';
// import { RouterReducerState } from '@ngrx/router-store';
import { RouterState } from './router.reducer';
import * as fromAuth from '@lib/auth'; // ../../../projects/auth/src/lib/store/auth.state';
import * as fromProperty from '../../../projects/property-manager/src/app/store/property.state';
// import {  } from '../../../projects/property-manager/src/app/store/reducers';
import * as fromDash from '@lib/dashboard';
import * as fromMarketing from '../../../projects/marketing-manager/src/app/store/marketing.state';
import * as fromLease from '../../../projects/lease-manager/src/app/store/lease-state';

import { property, p_reducer} from '../../../projects/property-manager/src/app/store/reducers';
import { marketing, m_reducer } from 'projects/marketing-manager/src/app/store/reducers';
import { lease, l_reducer } from 'projects/lease-manager/src/app/store/reducers';

export interface AppState {
  auth: fromAuth.AuthState;
  property: fromProperty.PropertyState;
  dashboard: fromDash.DashState;
  marketing: fromMarketing.PropertyListingState;
  lease: fromLease.PropertyLeaseState;
  router: RouterState;
}

export const appReducer = {
  // [SHARED_STATE_NAME]: SharedReducer,
  // [AUTH_STATE_NAME]: AuthReducer,
  // router: routerReducer,
  auth: fromAuth.reducer,
  property: p_reducer,
  marketing: m_reducer,
  lease: l_reducer
};
