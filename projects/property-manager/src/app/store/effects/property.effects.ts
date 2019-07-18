import { error } from "./../../../../../auth/src/lib/store/auth.reducers";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { PropertyService, Property } from "@lib/app-core";
import { mergeMap, catchError, map, tap } from "rxjs/operators";
import { EMPTY, of } from 'rxjs';

import * as PropertyActions from '../actions/property.actions';

@Injectable()
export class PropertyEffects {
  constructor(
    private actions$: Actions,
    private propertyService: PropertyService
  ) {}

  getProeprtyList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.getPropertyList),
      // tap(() => console.log('got here')),
      mergeMap(() =>
        this.propertyService.getPropertyList().pipe(
          map((properties: Property[]) => ({
            type: '[Property] Get Property List Success',
            payload: properties
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(
            err => {
              return of('[Property] Get Property List Failure', err.error);
            } // EMPTY
          )
        )
      )
    )
  );


}
