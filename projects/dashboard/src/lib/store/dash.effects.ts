import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from '../services/dashboard.service';

import * as DashActions from './dash.actions';
import { Property } from '../models/property.model';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PropertyEffects {

  constructor(
    private actions$: Actions,
    private dashService: DashboardService
  ) {}

  getPropertyList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getPropertyList),
      tap(() => console.log('got here for property list from dash lib')),
      switchMap(() =>
        this.dashService.getPropertyList().pipe(
          map((properties: Property[]) => ({
            type: '[Property] Get Property List Success',
            payload: properties
          })),
          tap(res => {console.log('response: ' + res); }),
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
