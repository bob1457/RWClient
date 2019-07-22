import { OnInit } from '@angular/core';
import { Action, ActionReducer } from '@ngrx/store';
import { LocalstorageService } from '../services/localstorage.service';

export function storageMetaReducer<S, A extends Action = Action>(
  saveKeys: string[],
  localStorageKey: string,
  storageService: LocalstorageService) {

    let onInit = true;

    return (reducer: ActionReducer<S, A>) => {
      // return (state: S, action: A): S => {

      //   const nextState = reducer(state, action);
      // };

    };



}

// function getSavedState(localStorageKey: string): any {
//   return JSON.parse(localStorage.getItem(localStorageKey));
// }

// function setSavedSteate(state: any, localStorageKey: string) {
//   localStorage.setItem(localStorageKey, JSON.stringify(state));
// }
