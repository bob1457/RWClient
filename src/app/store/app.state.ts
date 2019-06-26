import * as fromAuth from '@lib/auth'; // ../../../projects/auth/src/lib/store/auth.state';

export interface AppState {
  auth: fromAuth.AuthState;
}
