import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LeaseService, PropertyLease, PropertyTenant } from '@lib/app-core';
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
          catchError(
            err => {
              return of('[Leases] Get all leases Failure', err.error);
            } // EMPTY
          )
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
          catchError(
            err => {
              tap( () => console.log('err'));
              return of(LeaseActions.getLeaseDetailsFailure([err.error]));
            } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          )
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
          catchError(
            err => {
              return of('[Leases] Get all tenants Failure', err.error);
            } // EMPTY
          )
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
          catchError(
            err => {
              tap( () => console.log('err'));
              return of(LeaseActions.getTenantDetailsFailure([err.error]));
            } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          )
        )
      )
    )
  );


}
