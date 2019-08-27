import * as DashActions from './dash.actions';
import { DashState } from './dash.state';
import { createReducer, Action, on} from '@ngrx/store';


export const initialState: DashState =  { // adapter.getInitialState
  loading: false,
  loaded: false,
  properties: null,
  owners: null,
  contracts: null,
  tenants: name,
  errorMessage: null
};

debugger;

const dashReducer = createReducer(
  initialState,

  on(DashActions.getPropertyList, state => {
    return ({
      ...state,
      loading: true,
      loaded: false
    });
  }),

  on(DashActions.getPropertyListSuccess, (state, { payload }) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      properties: payload
    });
  })
)









export function reducer(state: DashState | undefined, action: Action) {
  return dashReducer(state, action);
}
