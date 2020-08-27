import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LeaseService, PropertyLease, PropertyTenant, Vendor } from '@lib/app-core';
import * as LeaseActions from '../actions/lease.actions';

import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class LeaseEffects {
  constructor(
    private actions$: Actions,
    private leaseService: LeaseService
  ) {}

  getAllLeases$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllLeases),
      tap(() => console.log('got here for property leases!!!')),
      switchMap(() =>
        this.leaseService.getAllLeases().pipe(
          map((listings: PropertyLease[]) => ({
            type: '[Leases] Get all leases Success',
            payload: listings
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(LeaseActions.getPAllLeasesFailure(error.message)))// EMPTY
        )
      )
    )
  );

  getLeaseDetails$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getLeaseDetails),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.getLeaseDetails(payload).pipe(
          tap(() => console.log('got here for lease details')),
          map((lease: PropertyLease) => ({
            type: '[Leases] Get Lease Details Success', // the name of the action(string) must match the string in the Action, case senstive
            payload: lease
          })),
          tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     tap( () => console.log('err'));
          //     return of(LeaseActions.getLeaseDetailsFailure([err.error]));
          //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          // )
          catchError(error => of(LeaseActions.getLeaseDetailsFailure(error.message)))// EMPTY
        )
      )
    )
  );

  getAllTenants$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllTenants),
      tap(() => console.log('got here for property tenants!!!')),
      switchMap(() =>
        this.leaseService.getAllTenants().pipe(
          map((tenants: PropertyTenant[]) => ({
            type: '[Leases] Get all tenants Success', // the name of the action(string) must match the string in the Action, case senstive
            payload: tenants
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all tenants Failure', err.error);
          //   }
          // )
          catchError(error => of(LeaseActions.getAllTenantsFailure(error.message)))// EMPTY
        )
      )
    )
  );

  getTenantDetails$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getTenantDetails),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.getTenantDetails(payload).pipe(
          tap(() => console.log('got here for tenant details')),
          map((tenant: PropertyTenant) => ({
            // tslint:disable-next-line:max-line-length
            type: '[Leases] Get Tenant Details Success', // the name of the action(string) must match the string in the Action, case senstive
            payload: tenant
          })),
          tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     tap( () => console.log('err'));
          //     return of(LeaseActions.getTenantDetailsFailure([err.error]));
          //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          // )
          catchError(error => of(LeaseActions.getTenantDetailsFailure(error.message)))
        )
      )
    )
  );

  addPropertyLease$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.addLease),
      tap(() => console.log('got here to add property lease !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.addLease(payload).pipe(
          map((lease: PropertyLease) => ({
            type: '[Leases] Add Lease Success',
            payload: lease
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Add Property Listing Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );

  // addPropertyTenant$ = createEffect(() =>
  //   this.actions$.pipe(
  //     // ofType('[Property] Get Property List'),
  //     ofType(LeaseActions.addTenant),
  //     tap(() => console.log('got here to add property Tenant !!!')),
  //     map(action => action.payload),
  //     switchMap((payload) =>
  //       this.leaseService.addTenant(payload).pipe(
  //         map((Tenant: PropertyTenant) => ({
  //           type: '[Leases] Add Tenant Success',
  //           payload: Tenant
  //         })),
  //         // tap(res => {console.log('response: ' + res); }),
  //         // catchError(
  //         //   err => {
  //         //     return of('[Marketing] Add Property Listing Failure', err.error);
  //         //   } // EMPTY
  //         // )
  //         catchError(error => of(LeaseActions.addTenantFailure(error.message)))
  //       )
  //     )
  //   )
  // );

  updateLease$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.updateLease),
      tap(() => console.log('got here to update property lease !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.updateLease(payload).pipe(
          map((lease: PropertyLease) => ({
            type: '[Leases] Update Lease Success',
            payload: lease
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Update Property Listing Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(LeaseActions.updateLeaseFailure(error.message)))
        )
      )
    )
  );

  updateTenant$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.updateTenant),
      tap(() => console.log('got here to update property tenant !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.updateTenant(payload).pipe(
          map((tenant: PropertyTenant) => ({
            type: '[Leases] Update Tenant Success',
            payload: tenant
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Update Property Listing Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(LeaseActions.updateTenantFailure(error.message)))
        )
      )
    )
  );

  getAllVendors$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllVendors),
      tap(() => console.log('got here for vendors!!!')),
      switchMap(() =>
        this.leaseService.getAllVendors().pipe(
          map((vendors: Vendor[]) => ({
            type: '[Leases] Get All Vendors Success',
            payload: vendors
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(LeaseActions.getAllVendorsFailure(error.message)))// EMPTY
        )
      )
    )
  );

}
