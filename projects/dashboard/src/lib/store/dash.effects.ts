import { ManagementContract } from '../models/management-contract.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from '../services/dashboard.service';

import * as DashActions from './dash.actions';
import { Property } from '../models/property.model';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PropertyOwner } from '../models/property-owner.model';
import { PropertyLease } from '../models/property-lease.model';
import { PropertyTenant, RentalApplication, OpenHouse } from '@lib/app-core';
import { PropertyListing } from '../models/property-listing.model';
import { PropertyImg } from '../models/property-img';

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
      // map(action => action.payload),
      // tap(() => console.log('got here for property list from dash lib')),
      switchMap(() =>
        this.dashService.getPropertyList().pipe(
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
          catchError(error => of(DashActions.getPropertyListFailure(error.message)))
        )
      )
    )
  );

  getPropertyListByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getPropertyListByPm),
      map(action => action.payload),
      // tap(() => console.log('got here for property list by PM from dash lib')),
      switchMap((payload) =>
        this.dashService.getPropertyListByPm(payload).pipe(
          map((properties: Property[]) => ({
            type: '[Property] Get Property List By PM Success',
            payload: properties
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Property] Get Property List Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getPropertyListFailure(error.message)))
        )
      )
    )
  );

  getPropertyImgList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getPropertyImageList),
      // tap(() => console.log('got here for property image list!!!')),
      switchMap(() =>
        this.dashService.getAllPropertyImages().pipe(
          map((listings: PropertyImg[]) => ({
            type: '[Property] Get Property Image List Success',
            payload: listings
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Property Listing Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getPropertyImageListFailure(error.message)))
        )
      )
    )
  );

  getPropertyOwnerList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getPropertyOwnerList),
      // map(action => action.payload),
      tap(() => console.log('got here to call service for retrieving all owners from dash lib')),
      switchMap(() =>
        this.dashService.getPropertyOwnerList().pipe(
          map((owners: PropertyOwner[]) => ({
            type: '[Property] Get Property Owner List Success',
            payload: owners
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Property] Get Property Owner List Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getPropertyOwnerListFailure(error.message)))
        )
      )
    )
  );

  getPropertyOwnerListByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getPropertyOwnerListByPm),
      map(action => action.payload),
      // tap(() => console.log('got here to call service for retrieving owners by PM from dash lib')),
      switchMap((payload) =>
        this.dashService.getPropertyOwnerListByPm(payload).pipe(
          map((owners: PropertyOwner[]) => ({
            type: '[Property] Get Property Owner List By PM Success',
            payload: owners
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Property] Get Property Owner List Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getPropertyOwnerListFailure(error.message)))
        )
      )
    )
  );

  getContractList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getContractList),
      // map(action => action.payload),
      tap(() => console.log('got here to call service for retrieving contracts from dashboard lib')),
      switchMap(() =>
        this.dashService.getManagementContractList().pipe(
          map((contracts: ManagementContract[]) => ({
            type: '[Property] Get Contract List Success',
            payload: contracts
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Property] Get Contract List Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getContractListFailure(error.message)))
        )
      )
    )
  );

  getContractListByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getContractListByPm),
      map(action => action.payload),
      // tap(() => console.log('got here to call service for retrieving contracts by PM from dashboard lib')),
      switchMap((payload) =>
        this.dashService.getManagementContractListByPm(payload).pipe(
          map((contracts: ManagementContract[]) => ({
            type: '[Property] Get Contract List By PM Success',
            payload: contracts
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Property] Get Contract List Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getContractListByPmFailure(error.message)))
        )
      )
    )
  );

  getPropertyListing$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getPropertyListing),
      tap(() => console.log('got here for (marketing) property listing from dash lib')),
      switchMap(() =>
        this.dashService.getAllPropertyListings().pipe(
          map((listings: PropertyListing[]) => ({
            type: '[Marketing] Get Property Listing Success',
            payload: listings
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Property Listing Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getPropertyListingFailure(error.message)))
        )
      )
    )
  );

  getPropertyListingByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getPropertyListingByPm),
      map(action => action.payload),
      // tap(() => console.log('got here for (marketing) property listing by PM from dash lib')),
      switchMap((payload) =>
        this.dashService.getAllPropertyListingsByPm(payload).pipe(
          map((listings: PropertyListing[]) => ({
            type: '[Marketing] Get Property Listing By PM Success',
            payload: listings
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Property Listing Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getPropertyListingByPmFailure(error.message)))
        )
      )
    )
  );

  getAllLeases$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getAllLeases),
      // tap(() => console.log('got here for property leases!!! from dash')),
      switchMap(() =>
        this.dashService.getLeaseAgreementList().pipe(
          map((leases: PropertyLease[]) => ({
            type: '[Leases] Get all leases Success',
            payload: leases
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getPAllLeasesFailure(error.message)))
        )
      )
    )
  );

  getAllLeasesByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getAllLeasesByPm),
      map(action => action.payload),
      // tap(() => console.log('got here for property leases!!! from dash')),
      switchMap((payload) =>
        this.dashService.getLeaseAgreementListByPm(payload).pipe(
          map((leases: PropertyLease[]) => ({
            type: '[Leases] Get all leases by PM Success',
            payload: leases
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getPAllLeasesFailure(error.message)))
        )
      )
    )
  );

  getTenantListing$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getAllTenants),
      tap(() => console.log('got here for (marketing) property tenants from dash lib')),
      switchMap(() =>
        this.dashService.getTenantList().pipe(
          map((tenants: PropertyTenant[]) => ({
            type: '[Leases] Get all tenants Success',
            payload: tenants
          })),
          tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all tenants Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getAllTenantsFailure(error.message)))
        )
      )
    )
  );

  getTenantListingByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getAllTenantsByPm),
      map(action => action.payload),
      tap(() => console.log('got here for (marketing) property tenants by PM from dash lib')),
      switchMap((payload) =>
        this.dashService.getTenantListByPm(payload).pipe(
          map((tenants: PropertyTenant[]) => ({
            type: '[Leases] Get all tenants by PM Success',
            payload: tenants
          })),
          tap(res => { console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all tenants Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getAllTenantsByPmFailure(error.message)))
        )
      )
    )
  );

  getRentalApplications$ = createEffect(() =>
            this.actions$.pipe(
              ofType(DashActions.getRentalApplicationList),
              // tap(() => console.log(' get here for rental app from dash lib')),
              switchMap(() =>
                this.dashService.getRentalApplicationList().pipe(
                  map((applicaitons: RentalApplication[]) => ({
                    type: '[Marketing] Get Rental Application List Success',
                    payload: applicaitons
                })),
                tap(res => { console.log('response: ' + res); }),
                // catchError(
                //   err => {
                //     return of('[Leases] Get all applications Failure', err.error);
                //   }
                // )
                catchError(error => of(DashActions.getRentalApplicationListFailure(error.message)))
              )
            )
          )
  );

  // getRentalApplicationsByPm$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(DashActions.getRentalApplicationListByPm),
  //     // tap(() => console.log(' get here for rental app from dash lib')),
  //     map(action => action.payload),
  //     switchMap((payload) =>
  //       this.dashService.getRentalApplicationListbyPm(payload).pipe(
  //         map((applicaitons: RentalApplication[]) => ({
  //           type: '[Marketing] Get Rental Application List by PM Success',
  //           payload: applicaitons
  //         })),
  //         tap(res => { console.log('response: ' + res); }),
  //         // catchError(
  //         //   err => {
  //         //     return of('[Leases] Get all applications Failure', err.error);
  //         //   }
  //         // )
  //         catchError(error => of(DashActions.getRentalApplicationListByPmFailure(error.message)))
  //       )
  //     )
  //   )
  // );

  getRentalApplicationsByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getRentalApplicationListByPm),
      map(action => action.payload),
      // tap(() => console.log('got here to call service for retrieving applications by PM from dashboard lib')),
      switchMap((payload) =>
        this.dashService.getRentalApplicationListByPm(payload).pipe(
          map((applications: RentalApplication[]) => ({
            type: '[Marketing] Get Rental Application List by PM Success',
            payload: applications
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Property] Get Contract List Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getRentalApplicationListByPmFailure(error.message)))
        )
      )
    )
  );

  getOpenHouseList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getOpenHouseList),
      // tap(() => console.log('got here for open house list!!!')),
      switchMap(() =>
        this.dashService.getOpenHouseList().pipe(
          map((openhouses: OpenHouse[]) => ({
            type: '[Marketing] Get OpenHouse List Success',
            payload: openhouses
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Rental Applications Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getOpenHouseListFailure(error.message)))
        )
      )
    )
  );

  getOpenHouseListByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getOpenHouseListByPm),
      map(action => action.payload),
      // tap(() => console.log('got here to call service for openhouse by PM from dashboard lib')),
      switchMap((payload) =>
        this.dashService.getOpenHouseListByPm(payload).pipe(
          map((openhouse: OpenHouse[]) => ({
            type: '[Marketing] Get OpenHouse List by PM Success',
            payload: openhouse
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Property] Get Contract List Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getOpenHouseListByPmFailure(error.message)))
        )
      )
    )
  );

  getRentPaymentList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getRentPaymentList),
      // tap(() => console.log('got here for rent payment list!!!')),
      switchMap(() =>
        this.dashService.getRentPaymentList().pipe(
          map((payments: any[]) => ({
            type: '[Lease] Get Rent Payment List Success',
            payload: payments
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Rental Applications Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getRentPaymentListFailure(error.message)))
        )
      )
    )
  );


  getVendorList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getAllVendors),
      // tap(() => console.log('got here for vendor list!!!')),
      // map(action => action.payload),
      switchMap((payload) =>
        this.dashService.getVendorListByCreator(payload).pipe(
          map((vendors: any[]) => ({
            type: '[Leases] Get All Vendors Success',
            payload: vendors
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Rental Applications Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getAllVendorsByUserFailure(error.message)))
        )
      )
    )
  );

  getVendorListByUser$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getAllVendorsByUser),
      // tap(() => console.log('got here for vendor list!!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.dashService.getVendorListByCreator(payload).pipe(
          map((vendors: any[]) => ({
            type: '[Leases] Get All Vendors By User Success',
            payload: vendors
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Rental Applications Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getAllVendorsFailure(error.message)))
        )
      )
    )
  );

  getWorkOrderList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getAllWorkOrders),
      // tap(() => console.log('got here for work order list!!!')),
      switchMap(() =>
        this.dashService.getWorkOrderList().pipe(
          map((vendors: any[]) => ({
            type: '[Leases] Get All Work Orders Success',
            payload: vendors
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Rental Applications Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getAllWorkOrdersFailure(error.message)))
        )
      )
    )
  );

  getWorkOrderListByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getAllWorkOrderByPm),
      map(action => action.payload),
      // tap(() => console.log('got here for work order list!!!')),
      switchMap((payload) =>
        this.dashService.getWorkOrderListByPm(payload).pipe(
          map((vendors: any[]) => ({
            type: '[Leases] Get All Work Orders by PM Success',
            payload: vendors
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Rental Applications Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getAllWorkOrdersByPmFailure(error.message)))
        )
      )
    )
  );

  getServiceRequestList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getAllServiceRequests),
      // tap(() => console.log('got here for service request list!!!')),
      switchMap(() =>
        this.dashService.getServiceList().pipe(
          map((vendors: any[]) => ({
            type: '[Leases] Get All Service Request Success',
            payload: vendors
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Rental Applications Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getAllServiceRequestsFailure(error.message)))
        )
      )
    )
  );

  getServiceRequestListByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getAllServiceRequestsByPm),
      map(action => action.payload),
      // tap(() => console.log('got here for service request list!!!')),
      switchMap((payload) =>
        this.dashService.getServiceListByPm(payload).pipe(
          map((requests: any[]) => ({
            type: '[Leases] Get All Service Request by PM Success',
            payload: requests
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Rental Applications Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getAllServiceRequestsByPmFailure(error.message)))
        )
      )
    )
  );

  getAllInvoices$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getAllInvoices),
      // tap(() => console.log('got here for invoices!!!')),
      switchMap(() =>
        this.dashService.getAllInvoices().pipe(
          map((list: any[]) => ({
            type: '[Leases] Get All Invoices Success',
            payload: list
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getAllInvoicesFailure(error.message)))// EMPTY
        )
      )
    )
  );

  getAllCouncils$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getCouncilList),
      // tap(() => console.log('got here for invoices!!!')),
      switchMap(() =>
        this.dashService.getAllCouncils().pipe(
          map((list: any[]) => ({
            type: '[Property] Get Council List Success',
            payload: list
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getCouncilListFailure(error.message)))// EMPTY
        )
      )
    )
  );

  getAllCouncilsByUser$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(DashActions.getCouncilListByUser),
      // tap(() => console.log('got here for invoices!!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.dashService.getAllCouncilsByCreator(payload).pipe(
          map((list: any[]) => ({
            type: '[Property] Get Council List By User Success',
            payload: list
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(DashActions.getCouncilListByUserFailure(error.message)))// EMPTY
        )
      )
    )
  );

}
