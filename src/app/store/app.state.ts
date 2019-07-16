// import { RouterReducerState } from '@ngrx/router-store';
import { RouterState } from './router.reducer';
import * as fromAuth from '@lib/auth'; // ../../../projects/auth/src/lib/store/auth.state';


export interface AppState {
  auth: fromAuth.AuthState;
  router: RouterState;
}
