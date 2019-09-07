import { ManagementContract } from '../models/management-contract.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from '../services/dashboard.service';

import * as DashActions from './dash.actions';
import { Property } from '../models/property.model';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PropertyOwner } from '../models/property-owner.model';

@Injectable()
export class DashboardEffects {

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

  getPropertyOwnerList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getPropertyOwnerList),
      tap(() => console.log('got here to call service for retrieving owners from dash lib')),
      switchMap(() =>
        this.dashService.getPropertyOwnerList().pipe(
          map((owners: PropertyOwner[]) => ({
            type: '[Property] Get Property Owner List Success',
            payload: owners
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(
            err => {
              return of('[Property] Get Property Owner List Failure', err.error);
            } // EMPTY
          )
        )
      )
    )
  );

  getContractList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getContractList),
      tap(() => console.log('got here to call service for retrieving contracts from dashboard lib')),
      switchMap(() =>
        this.dashService.getManagementContractList().pipe(
          map((contracts: ManagementContract[]) => ({
            type: '[Property] Get Contract List Success',
            payload: contracts
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(
            err => {
              return of('[[Property] Get Contract List Failure', err.error);
            } // EMPTY
          )
        )
      )
    )
  );

  // getPropertyListing$ = createEffect(() =>
  //   this.actions$.pipe(
  //     // ofType('[Property] Get Property List'),
  //     ofType(DashActions.getContractList),
  //     tap(() => console.log('got here to call service for retrieving contracts from dashboard lib')),
  //     switchMap(() =>
  //       this.dashService.getManagementContractList().pipe(
  //         map((contracts: ManagementContract[]) => ({
  //           type: '[Property] Get Contract List Success',
  //           payload: contracts
  //         })),
  //         // tap(res => {console.log('response: ' + res); }),
  //         catchError(
  //           err => {
  //             return of('[[Property] Get Contract List Failure', err.error);
  //           } // EMPTY
  //         )
  //       )
  //     )
  //   )
  // );


}
