import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { PropertyService, PropertyOwnerService, Property, PropertyStatus, PropertyOwner } from '@lib/app-core';
import { mergeMap, catchError, map, tap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as PropertyActions from '../actions/property.actions';
import { PropertyActive } from 'projects/app-core/src/lib/property/models/property-active.model';




@Injectable()
export class PropertyEffects {
  constructor(
    private actions$: Actions,
    private propertyService: PropertyService,
    private propertyOwnerService: PropertyOwnerService
  ) {}

  getPropertyList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.getPropertyList),
      tap(() => console.log('got here for property list!!!')),
      switchMap(() =>
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
  ); //mergeMap was used

  getPropertyDetails$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.getPropertyDetails),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.propertyService.getPropertyDetails(payload).pipe(
          tap(() => console.log('got here 2: ' + payload)),
          map((property: Property) => ({
            type: '[Property] Get Property Details Success',
            payload: property
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(
            err => {
              return of(PropertyActions.getPropertyDetailsFailure([err.error]));
            } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          )
        )
      )
    )
  );

  addProperty$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.addProperty),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.propertyService.addProperty(payload).pipe(
          tap(() => console.log('called property service: ' + payload)),
          map((property: Property) => ({
            type: '[Property] Add Property Success',
            payload: property
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(
            err => {
              return of('[Property] Add Property Failure', err.error);
            } // EMPTY
          )
        )
      )
    )
  );

  updateProperty$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.updateProperty),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.propertyService.updateProperty(payload).pipe(
          tap(() => console.log('called property service for update: ' + payload)),
          map((property: Property) => ({
            type: '[Property] Update Property Success',
            payload: property
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(
            err => {
              return of('[Property] Update Property Failure', err.error);
            } // EMPTY
          )
        )
      )
    )
  );

  updatePropertyStatus$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.updatePropertyStatus),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.propertyService.updatePropertyStatus(payload).pipe(
          tap(() => console.log('called property service for status change: ' + payload)),
          map((status: Property) => ({ // PropertyStatus
            type: '[Property] Update Property Status Success',
            payload: status
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(
            err => {
              return of('[Property] Update Property Status Failure', err.error);
            } // EMPTY
          )
        )
      )
    )
  );


  removeProperty$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.removeProperty),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.propertyService.removeProperty(payload).pipe(
          // tap(() => console.log('called property service: ' + payload)),
          map((active: Property) => ({ // PropertyActive
            type: '[Property] Remove Property Success',
            payload: active
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(
            err => {
              return of('[Property] Remove Property Failure', err.error);
            } // EMPTY
          )
        )
      )
    )
  );

  getPropertyOwnerList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.getPropertyOwnerList),
      tap(() => console.log('got here to call service for retrieving owners')),
      switchMap(() =>
        this.propertyService.getPropertyOwnerList().pipe(
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


  getPropertyOwnerDetails$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.getPropertyOwnerDetails),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.propertyOwnerService.getPropertyDetails(payload).pipe(
          tap(() => console.log('got here for owner details: ' + payload)),
          map((owner: PropertyOwner) => ({
            type: '[Property] Get Property Owner Details Success',
            payload: owner
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(
            err => {
              return of(PropertyActions.getPropertyOwnerDetailsFailure([err.error]));
            } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          )
        )
      )
    )
  );

  addPropertyOwner$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.addPropertyOwner),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.propertyOwnerService.addPropertyOwner(payload).pipe( // this.propertyService.addOwner(payload).pipe(
          tap(() => console.log('called property owner service to add owner: ' + payload)),
          map(( owner: PropertyOwner) => ({
            type: '[Property] Add Property Owner Success',
            payload: owner
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(
            err => {
              return of('[Property] Add Property Owner Failure', err.error);
            } // EMPTY
          )
        )
      )
    )
  );


  // addPropertyOwner$ = createEffect(() =>
  //   this.actions$.pipe(
  //     // ofType('[Property] Get Property List'),
  //     ofType(PropertyActions.addPropertyOwner),
  //     // tap(() => console.log('got here: ')),
  //     map(action => action.payload),
  //     switchMap((payload) =>
  //       this.propertyOwnerService.addPropertyOwner(payload).pipe(
  //         tap(() => console.log('called property owner service: ' + payload)),
  //         map((owner: PropertyOwner) => ({
  //           type: '[Property] Add Property Owner Success',
  //           payload: owner
  //         })),
  //         // tap(res => {console.log('response: ' + res); }),
  //         catchError(
  //           err => {
  //             return of('[Property] Add Property Owner Failure', err.error);
  //           } // EMPTY
  //         )
  //       )
  //     )
  //   )
  // );
}
