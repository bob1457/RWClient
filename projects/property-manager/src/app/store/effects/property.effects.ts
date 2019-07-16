import { error } from "./../../../../../auth/src/lib/store/auth.reducers";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { PropertyService, Property } from "@lib/app-core";
import { mergeMap, catchError, map } from "rxjs/operators";
import { EMPTY, of } from "rxjs";

@Injectable()
export class PropertyEffects {
  constructor(
    private actions$: Actions,
    private propertyService: PropertyService
  ) {}

  getProeprtyList$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Property] Get Property List'),
      mergeMap(() =>
        this.propertyService.getPropertyList().pipe(
          map(properties => ({
            type: 'Get Property List Success',
            payload: properties
          })),
          catchError(
            err => of('[Property] Get Property List Failure', err.error) // EMPTY
          )
        )
      )
    )
  );
}
