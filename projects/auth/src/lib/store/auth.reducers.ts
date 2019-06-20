// Used to decide what “State” should be provided based on the different “Types” <- defined in “Action”.

// (pure) function that dispatch actions to update state in store
// What reducer will do:
// 1. Respond to actions
// 2. Update state of the application

import { User } from '../models/user';
import { AuthActionTypes, All } from './auth.actions';

// Here is the final or latest state required by the app
export interface State { // Define state - a type that will be used below in initialState and reducer function -- STRONGLY TYPED
    isAuthenticated: boolean;
    user: User | null;
    errorMessage: string | null;
}

// Here is the initial state set if no changes happened
export const initialState: State = { // Define initial state
    isAuthenticated: false,
    user: null,
    errorMessage: null
};

export function reducer(state = initialState, action: All): State {
   // Case can be more complex
   // "Login" is not put since it's not used for representing a status (State)

  // Reducer implementation - update state in application state store
  // return type is State
    switch (action.type) {
      case AuthActionTypes.LOGIN_SUCCESS: {
        return {
          ...state, // short presentation of an array (Typescript specific) - what is in it - previous state value???
          isAuthenticated: true,
          // The username is retrieved from the "Action"
          // In production, user data should be defined as a model
          // Retrieving user data like, `user: action.payload.user <- a model`
          user: {
            token: action.payload.token,
            // email: action.payload.email,
            username: action.payload.username
          },
          errorMessage: null
        };
      }
      case AuthActionTypes.LOGIN_FAILURE: {
        return {
          ...state,
          errorMessage: 'Incorrect email and/or password.'
        };
      }
      case AuthActionTypes.SIGNUP_SUCCESS: {
        return {
          ...state,
         isAuthenticated: true,
          user: {
            token: action.payload.token,
            // email: action.payload.email,
            username: action.payload.username
          },
          errorMessage: null
        };
      }
      case AuthActionTypes.SIGNUP_FAILURE: {
        return {
          ...state,
          errorMessage: 'That email is already in use.'
        };
      }
      case AuthActionTypes.LOGOUT: {
        return initialState;
      }
      default: {
        return state;
      }
    }
  }

// Use "Const" for getting read-only data managed by current "Reducer"
export const isAuthenticated = (state: State) => state.isAuthenticated;
export const getUser = (state: State) => state.user;
export const errorMessage = (state: State) => state.errorMessage;


