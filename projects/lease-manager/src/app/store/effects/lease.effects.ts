import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LeaseService, PropertyLease, PropertyTenant, Vendor, WorkOrder, ServiceRequest } from '@lib/app-core';
import * as LeaseActions from '../actions/lease.actions';

import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';


@Injectable()
export class LeaseEffects {
  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar,
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

  getAllLeasesByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllLeasesByPm),
      tap(() => console.log('got here for property leases by PM!!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.getAllLeasesByPm(payload).pipe(
          map((listings: PropertyLease[]) => ({
            type: '[Leases] Get all leasess by PM Success',
            payload: listings
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(LeaseActions.getPAllLeasesByPmFailure(error.message)))// EMPTY
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

  getAllTenantsByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllTenantsByPm),
      tap(() => console.log('got here for property tenants!!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.getAllTenantsByPm(payload).pipe(
          map((tenants: PropertyTenant[]) => ({
            // tslint:disable-next-line:max-line-length
            type: '[Leases] Get all tenants Success by PM', // the name of the action(string) must match the string in the Action, case senstive
            payload: tenants
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all tenants Failure', err.error);
          //   }
          // )
          catchError(error => of(LeaseActions.getAllTenantsByPmFailure(error.message)))// EMPTY
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


  addServiceRequest$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.addServiceRequest),
      tap(() => console.log('got here to add service request !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.addServiceRequest(payload).pipe(
          map((request: any) => ({
            type: '[Leases] Add Service Request Success',
            payload: request
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Tenant added successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.addServiceRequestFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );







  addTenant$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.addTenant),
      tap(() => console.log('got here to add tenant !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.addTenant(payload).pipe(
          map((tenant: PropertyTenant) => ({
            type: '[Leases] Add Tenant Success',
            payload: tenant
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Tenant added successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.addTenantFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
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
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Property lease added successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.addLeaseFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );

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
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Property lease updated successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.updateLeaseFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.updateLeaseFailure(error.message)))
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
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Tenant updated successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.updateTenantFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.updateTenantFailure(error.message)))
        )
      )
    )
  );
  // By User
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

  getAllVendorsByUser$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllVendorsByUser),
      map(action => action.payload),
      tap(() => console.log('got here for vendors by creator!!!')),
      switchMap((payload) =>
        this.leaseService.getAllVendorsByCreator(payload).pipe(
          map((vendors: Vendor[]) => ({
            type: '[Leases] Get All Vendors By User Success',
            payload: vendors
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(LeaseActions.getAllVendorsByUserFailure(error.message)))// EMPTY
        )
      )
    )
  );

  getVendorDetails$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getVendorDetails),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.getVendorDetails(payload).pipe(
          tap(() => console.log('got here for vendor details')),
          map((vendor: Vendor) => ({
            type: '[Leases] Get Vendor Details Success',
            payload: vendor
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     tap( () => console.log('err'));
          //     return of(LeaseActions.getLeaseDetailsFailure([err.error]));
          //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          // )
          catchError(error => of(LeaseActions.getVendorDetailsFailure(error.message)))// EMPTY
        )
      )
    )
  );

  addVendor$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.addVendor),
      tap(() => console.log('got here to add vendor !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.addVendor(payload).pipe(
          map((order: any) => ({
            type: '[Leases] Add Vendors Success',
            payload: order
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Vendor added successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.addVendorFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );

  updateWVendor$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.updateVendor),
      tap(() => console.log('got here to update vendor!!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.updateVendor(payload).pipe(
          map((vendor: Vendor) => ({
            type: '[Leases] Update Vendor Success',
            payload: vendor
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Vendor updated successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.updatVendorsFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.updateLeaseFailure(error.message)))
        )
      )
    )
  );

  getAllWorkOrders$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllWorkOrders),
      tap(() => console.log('got here for work order leases!!!')),
      switchMap(() =>
        this.leaseService.getAllWorkOrders().pipe(
          map((list: WorkOrder[]) => ({
            type: '[Leases] Get All Work Orders Success',
            payload: list
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(LeaseActions.getAllWorkOrdersFailure(error.message)))// EMPTY
        )
      )
    )
  );

  getAllWorkOrdersByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllWorkOrdersByPm),
      map(action => action.payload),
      // tap(() => console.log('got here for work order leases!!!')),
      switchMap((payload) =>
        this.leaseService.getAllWorkOrdersByPm(payload).pipe(
          map((list: WorkOrder[]) => ({
            type: '[Leases] Get All Work Orders Success by PM',
            payload: list
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(LeaseActions.getAllWorkOrdersByPmFailure(error.message)))// EMPTY
        )
      )
    )
  );

  getWorkOrderDetails$ = createEffect(() =>
  this.actions$.pipe(
    // ofType('[Property] Get Property List'),
    ofType(LeaseActions.getWorkOrderDetails),
    // tap(() => console.log('got here: ')),
    map(action => action.payload),
    switchMap((payload) =>
      this.leaseService.getWorkOrderDetails(payload).pipe(
        tap(() => console.log('got here for work order details')),
        map((order: WorkOrder) => ({
          type: '[Leases] Get Work Order Details Success', // the name of the action(string) must match the string in the Action, case senstive
          payload: order
        })),
        tap(res => {console.log('response: ' + res); }),
        // catchError(
        //   err => {
        //     tap( () => console.log('err'));
        //     return of(LeaseActions.getLeaseDetailsFailure([err.error]));
        //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
        // )
        catchError(error => of(LeaseActions.getWorkOrderDetailsFailure(error.message)))// EMPTY
        )
      )
    )
  );

  addWorkOrder$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.addWorkOrder),
      tap(() => console.log('got here to add order !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.addWorkOrders(payload).pipe(
          map((order: any) => ({
            type: '[Leases] Add Work Order Success',
            payload: order
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Work order added successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.addWorkOrderFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );

  updateWorkOrdere$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.updateWorkOrder),
      tap(() => console.log('got here to update work order !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.updateWorkOrder(payload).pipe(
          map((order: WorkOrder) => ({
            type: '[Leases] Update Work Order Success',
            payload: order
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Work order updated successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.updateLeaseFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.updateLeaseFailure(error.message)))
        )
      )
    )
  );

  getAllInvoices$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllInvoices),
      tap(() => console.log('got here for all invoices!!!')),
      switchMap(() =>
        this.leaseService.getAllInvoices().pipe(
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
          catchError(error => of(LeaseActions.getAllInvoicesFailure(error.message)))// EMPTY
        )
      )
    )
  );

  addInvoice$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.addInvoice),
      tap(() => console.log('got here to add invoice !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.addInvoice(payload).pipe(
          map((invoice: any) => ({
            type: '[Leases] Add Invoice Success',
            payload: invoice
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Invoice added successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.addWorkOrderFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );

  updateInvoice$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.updateInvoice),
      tap(() => console.log('got here to update invoice !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.updateInvoice(payload).pipe(
          map((invoice: any) => ({
            type: '[Leases] Update Invoice Success',
            payload: invoice
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Invoice updated successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.updateInvoiceFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.updateLeaseFailure(error.message)))
        )
      )
    )
  );

  getAllServiceRequests$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllServiceRequests),
      // tap(() => console.log('got here for service requests!!!')),
      switchMap(() =>
        this.leaseService.getAllServiceRequests().pipe(
          map((list: ServiceRequest[]) => ({
            type: '[Leases] Get All Service Request Success',
            payload: list
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(LeaseActions.getAllServiceRequestsFailure(error.message)))// EMPTY
        )
      )
    )
  );

  getAllServiceRequestsByPm$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllServiceRequestsByPm),
      tap(() => console.log('got here for service by PM requests!!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.getAllServiceRequestsByPm(payload).pipe(
          map((list: ServiceRequest[]) => ({
            type: '[Leases] Get All Service Request by PM Success',
            payload: list
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Leases] Get all leases Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(LeaseActions.getAllServiceRequestsByPmFailure(error.message)))// EMPTY
        )
      )
    )
  );

  getServiceRequestDetails$ = createEffect(() =>
  this.actions$.pipe(
    // ofType('[Property] Get Property List'),
    ofType(LeaseActions.getServiceRequestDetails),
    // tap(() => console.log('got here: ')),
    map(action => action.payload),
    switchMap((payload) =>
      this.leaseService.getDetails(payload).pipe(
        tap(() => console.log('got here for work order details')),
        map((request: ServiceRequest) => ({
          type: '[Leases] Get Service Request Details Success',
          payload: request
        })),
        tap(res => {console.log('response: ' + res); }),
        // catchError(
        //   err => {
        //     tap( () => console.log('err'));
        //     return of(LeaseActions.getLeaseDetailsFailure([err.error]));
        //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
        // )
        catchError(error => of(LeaseActions.getServiceRequestFailure(error.message)))// EMPTY
        )
      )
    )
  );

  getRentPaymentList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getRentPaymentList),
      tap(() => console.log('got here for rent payment list!!!')),
      switchMap(() =>
        this.leaseService.getRentPaymentList().pipe(
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
          catchError(error => of(LeaseActions.getRentPaymentListFailure(error.message)))
        )
      )
    )
  );

  getRentPaymentDetails$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getRentPaymenttDetails),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.getRentPaymentDetails(payload).pipe(
          tap(() => console.log('got here for payment details')),
          map((payment: any) => ({
            // tslint:disable-next-line:max-line-length
            type: '[Leases] Get Rent Payment Details Success', // the name of the action(string) must match the string in the Action, case senstive
            payload: payment
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     tap( () => console.log('err'));
          //     return of(LeaseActions.getTenantDetailsFailure([err.error]));
          //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          // )
          catchError(error => of(LeaseActions.getRentPaymentListFailure(error.message)))
        )
      )
    )
  );

  addRentPayment$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.addRentPayment),
      tap(() => console.log('got here to add rent !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.addRentPayment(payload).pipe(
          map((payment: any) => ({
            type: '[Leases] Add Rent Payment Success',
            payload: payment
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Rent payment added successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.addLeaseFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );

  updateRentPayment$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.updateRentPayment),
      tap(() => console.log('got here to update rent !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.updateRentPayment(payload).pipe(
          map((payment: any) => ({
            type: '[Leases] Update Rent Payment Success',
            payload: payment
          })),
          tap( () => {
            // window.alert('done');
            this.openSnackBar('Rent payment updated successfully.', 'close', 'notify');
           }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.addLeaseFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );

  addNotice$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.addNotice),
      tap(() => console.log('got here to add notice !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.addNotice(payload).pipe(
          map((order: any) => ({
            type: '[Leases] Add Notice Success',
            payload: order
          })),
          tap(() => {
            // window.alert('done');
            this.openSnackBar('Notice added successfully.', 'close', 'notify');
          }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.addNoticeFailure(error.message));
          }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );

  getAllNoticeForLease$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAllNoticeForLease),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.getAllNoticeForLeas(payload).pipe(
          tap(() => console.log('got here for all notice for lease')),
          map((notice: any) => ({
            // tslint:disable-next-line:max-line-length
            type: '[Leases] Get All Notice for Lease Success', // the name of the action(string) must match the string in the Action, case senstive
            payload: notice
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     tap( () => console.log('err'));
          //     return of(LeaseActions.getTenantDetailsFailure([err.error]));
          //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          // )
          catchError(error => of(LeaseActions.getAllNoticeForLeaseFailure(error.message)))
        )
      )
    )
  );

  getNoticeDetails$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getNoticeDetails),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.getNoticeDetails(payload).pipe(
          tap(() => console.log('got here for notice details')),
          map((notice: any) => ({
            // tslint:disable-next-line:max-line-length
            type: '[Leases] Get Noticet Details Success', // the name of the action(string) must match the string in the Action, case senstive
            payload: notice
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     tap( () => console.log('err'));
          //     return of(LeaseActions.getTenantDetailsFailure([err.error]));
          //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          // )
          catchError(error => of(LeaseActions.getNoticeDetailsFailure(error.message)))
        )
      )
    )
  );


  updateNoticeStatus$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.updateNoticeStatus),
      tap(() => console.log('got here to update notice status!!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.updateNoticeStatus(payload).pipe(
          map((notice: Vendor) => ({
            type: '[Leases] Update Notice Status Success',
            payload: notice
          })),
          tap(() => {
            // window.alert('done');
            this.openSnackBar('Notice status updated successfully.', 'close', 'notify');
          }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.updatVendorsFailure(error.message));
            }
          )
          // catchError(error => of(LeaseActions.updateLeaseFailure(error.message)))
        )
      )
    )
  );

  addAddendum$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.addAddendum),
      tap(() => console.log('got here to add addendum !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.addAddendum(payload).pipe(
          map((addendum: any) => ({
            type: '[Leases] Add Addendum Success',
            payload: addendum
          })),
          tap(() => {
            // window.alert('done');
            this.openSnackBar('Addendum added successfully.', 'close', 'notify');
          }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.addAddendumFailure(error.message));
          }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );

  getAddendumForLease$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAddendumForLease),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.getAddendumForLeas(payload).pipe(
          tap(() => console.log('got here for addendum for lease')),
          map((notice: any) => ({
            // tslint:disable-next-line:max-line-length
            type: '[Leases] Get Addendum for Lease Success', // the name of the action(string) must match the string in the Action, case senstive
            payload: notice
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     tap( () => console.log('err'));
          //     return of(LeaseActions.getTenantDetailsFailure([err.error]));
          //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          // )
          catchError(error => of(LeaseActions.getAddendumForLeaseFailure(error.message)))
        )
      )
    )
  );

  getAddendumDetails$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.getAddendumDetails),
      // tap(() => console.log('got here: ')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.getAddendumDetails(payload).pipe(
          tap(() => console.log('got here for addendum details')),
          map((notice: any) => ({
            // tslint:disable-next-line:max-line-length
            type: '[Leases] Get Addendum Details Success', // the name of the action(string) must match the string in the Action, case senstive
            payload: notice
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     tap( () => console.log('err'));
          //     return of(LeaseActions.getTenantDetailsFailure([err.error]));
          //   } // EMPTY // return of('[Property] Get Property Details Failure', err.error);
          // )
          catchError(error => of(LeaseActions.getAddendumDetailsFailure(error.message)))
        )
      )
    )
  );

  removeAddendum$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.removeAddendum),
      tap(() => console.log('got here to add notice !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.removeAddendum(payload).pipe(
          map((removed: any) => ({
            type: '[Leases] Remove Addendum Success',
            payload: removed
          })),
          tap(() => {
            // window.alert('done');
            this.openSnackBar('Addendum removed successfully.', 'close', 'notify');
          }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.removeAddendumFailure(error.message));
          }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );

  updateLeseAddendumState$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(LeaseActions.updateLeaseAddendumState),
      tap(() => console.log('got here to update !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.leaseService.updateLeaseAddendumState(payload).pipe(
          map((updated: any) => ({
            type: '[Leases] Update Lease Addendum State Success',
            payload: updated
          })),
          // tap(() => {
          //   // window.alert('done');
          //   this.openSnackBar('Addendum removed successfully.', 'close', 'notify');
          // }), // display notificaiton

          catchError(error => {
            this.openSnackBar(error.message, 'dismiss', 'error');
            return of(LeaseActions.updateLeaseAddendumStateFailure(error.message));
          }
          )
          // catchError(error => of(LeaseActions.addLeaseFailure(error.message)))
        )
      )
    )
  );

  openSnackBar(message: string, action: string, type: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = [type];
    config.duration = 3000;
    this.snackBar.open(message, action, config);
  }

}
