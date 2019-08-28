import { PropertyState } from './../../../projects/property-manager/src/app/store/property.state';
// import { RouterReducerState } from '@ngrx/router-store';
import { RouterState } from './router.reducer';
import * as fromAuth from '@lib/auth'; // ../../../projects/auth/src/lib/store/auth.state';
import * as fromProperty from '../../../projects/property-manager/src/app/store/property.state';
import * as fromDash from '@lib/dashboard';

export interface AppState {
  auth: fromAuth.AuthState;
  property: fromProperty.PropertyState;
  dashboard: fromDash.DashState;
  router: RouterState;
}
