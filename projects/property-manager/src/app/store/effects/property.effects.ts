import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { PropertyService, PropertyOwnerService, ManagementContractService, Property,
  ManagementContract, PropertyStatus, PropertyOwner } from '@lib/app-core';
import { mergeMap, catchError, map, tap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as PropertyActions from '../actions/property.actions';
import { PropertyActive } from 'projects/app-core/src/lib/property/models/property-active.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';




@Injectable()
export class PropertyEffects {
  constructor(
    private actions$: Actions,
    private propertyService: PropertyService,
    private snackBar: MatSnackBar,
    private propertyOwnerService: PropertyOwnerService,
    private contractService: ManagementContractService
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
          // catchError(
          //   err => {
          //     return of('[Property] Get Property List Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(PropertyActions.getPropertyListFailure(error.message)))
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
          // catchError(
          //   err => {
          //     return of(PropertyActions.getPropertyDetailsFailure([err.error]));
          //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          // )
          catchError(error => of(PropertyActions.getPropertyDetailsFailure(error.message)))
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
          map((property: any) => ({
            type: '[Property] Add Property Success',
            payload: property
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Property added successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(PropertyActions.addPropertyOwnerFailure(error.message));
            }
          )
          // catchError(error => of(PropertyActions.addPropertyFailure(error.message)))
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
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Property updated successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(PropertyActions.updatePropertyFailure(error.message));
            }
          )
          // catchError(error => of(PropertyActions.updatePropertyStatusFailure(error.message)))
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
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Property Status updated successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(PropertyActions.updatePropertyStatusFailure(error.message));
            }
          )
          // catchError(error => of(PropertyActions.updatePropertyStatusFailure(error.message)))
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
          // catchError(
          //   err => {
          //     return of('[Property] Remove Property Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(PropertyActions.removePropertyFailure(error.message)))
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
          // catchError(
          //   err => {
          //     // return of('[Property] Get Property Owner List Failure', err.error);
          //     return of(PropertyActions.getPropertyOwnerListFailure(err.error));
          //   } // EMPTY
          // )
          catchError(error => of(PropertyActions.getPropertyOwnerListFailure(error.message)))
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
          // catchError(
          //   err => {
          //     return of(PropertyActions.getPropertyOwnerDetailsFailure([err.error]));
          //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          // )
          catchError(error => of(PropertyActions.getPropertyOwnerDetailsFailure(error.message)))
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
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Owner Added successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(PropertyActions.addPropertyOwnerFailure(error.message));
            }
          )
          // catchError(error => of(PropertyActions.addPropertyOwnerFailure(error.message)))
        )
      )
    )
  );

  updatePropertyOwner$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.updatePropertyOwner),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.propertyOwnerService.updateOwner(payload).pipe(
          tap(() => console.log('called property service for update: ' + payload)),
          map((owner: PropertyOwner) => ({
            type: '[Property] Update Property Owner Success',
            payload: owner
          })),
          // tap(res => {console.log('response: ' + res); }),

          tap( () => {
            // window.alert('done');
            this.openSnackBar('Owner updated successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(PropertyActions.updatePropertyOwnerFailure(error.message));
            }
          )
          // catchError(error => of(PropertyActions.updatePropertyOwnerSuccess(error.message)))

        )
      )
    )
  );

  removePropertyOwner$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.removePropertyOwner),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.propertyOwnerService.removeOwner(payload).pipe(
          tap(() => console.log('called property owner service: ' + payload)),
          map((owner: any) => ({ // PropertyActive
            type: '[Property] Remove Property Owner Success' // ,
            // payload: owner
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Property] Remove Property Owner Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(PropertyActions.removePropertyOwnerFailure(error.message)))
        )
      )
    )
  );


  getContractList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.getContractList),
      // tap(() => console.log('got here to call service for retrieving contracts')),
      switchMap(() =>
        this.contractService.getManagementContractList().pipe(
          map((contracts: ManagementContract[]) => ({
            type: '[Property] Get Contract List Success',
            payload: contracts
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[[Property] Get Contract List Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(PropertyActions.getContractListFailure(error.message)))
        )
      )
    )
  );

  getContractDetails$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.getContractDetails),
      tap(() => console.log('got here for contract details: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.contractService.getManagementContractDetails(payload).pipe(
          // tap(() => console.log('got here 2: ' + payload)),
          map((contract: ManagementContract) => ({
            type: '[Property] Get Contract Details Success',
            payload: contract
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of(PropertyActions.getContractDetailsFailure([err.error]));
          //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          // )
          catchError(error => of(PropertyActions.getContractDetailsFailure(error.message)))
        )
      )
    )
  );

  addManagementContract$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.addManagementContract),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.contractService.addManagementContract(payload).pipe( // this.propertyService.addOwner(payload).pipe(
          tap(() => console.log('called property owner service to add contract: ' + payload)),
          map(( contract: ManagementContract) => ({
            type: '[Property] Add Management Contract Success',
            payload: contract
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Management contract added successfully.', 'close', 'notify');
           }),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Property] Add Management Contract Failure', err.error);
          //   } // EMPTY
          // )
          // catchError(error => of(PropertyActions.addManagementContractFailure(error.message)))
          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(PropertyActions.addManagementContractFailure(error.message));
            }
          )
        )
      )
    )
  );

  updateContract$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(PropertyActions.updateContract),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.contractService.updateManagementContract(payload).pipe(
          tap(() => console.log('called contract service for update: ' + payload)),
          map((contract: ManagementContract) => ({
            type: '[Property] Update Contract Success',
            payload: contract
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Management contract updated successfully.', 'close', 'notify');
           }), // display notificaiton
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     this.openSnackBar(err.message, '');
          //     return of(PropertyActions.updateContractFailure(err.message));
          //   } // EMPTY
          // )
          // catchError(error => of(PropertyActions.updateContractFailure(error.message)))
          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(PropertyActions.updateContractFailure(error.message));
          }
        )
      )
    )
  ));

  openSnackBar(message: string, action: string, type: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = [type];
    config.duration = 3000;
    this.snackBar.open(message, action, config);
  }

}
