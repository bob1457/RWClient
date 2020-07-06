import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MarketingService, PropertyListing, RentalApplication, PropertyImg } from '@lib/app-core';
import { Injectable } from '@angular/core';

import * as ListingActions from '../actions/marketing.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MarketingEffects {
  constructor(
    private actions$: Actions,
    private marketingService: MarketingService
  ) {}

  getPropertyListing$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(ListingActions.getPropertyListing),
      tap(() => console.log('got here for property listing!!!')),
      switchMap(() =>
        this.marketingService.getAllPropertyListings().pipe(
          map((listings: PropertyListing[]) => ({
            type: '[Marketing] Get Property Listing Success',
            payload: listings
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(
            err => {
              return of('[Marketing] Get Property Listing Failure', err.error);
            } // EMPTY
          )
        )
      )
    )
  );

  getPropertyImgList$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(ListingActions.getPropertyImageList),
      tap(() => console.log('got here for property image list!!!')),
      switchMap(() =>
        this.marketingService.getAllPropertyImages().pipe(
          map((listings: PropertyImg[]) => ({
            type: '[Marketing] Get Property Image List Success',
            payload: listings
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Property Listing Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(ListingActions.getPropertyImageListFailure(error.message)))
        )
      )
    )
  );


  getAllRentalProperties$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(ListingActions.getAllRentalProperties),
      tap(() => console.log('got here for rental property list!')),
      switchMap(() =>
        this.marketingService.getAllRentalProperties().pipe(
          map((rentalp: any[]) => ({
            type: '[Marketing] Get All Rental Properties Success',
            payload: rentalp
          })),
          // tap(res => {console.log('response: ' + res); }),
          catchError(error => of(ListingActions.getAllRentalPropertiesFailure(error.message)))
        )
      )
    )
  );


  getPropertyListingDetails$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(ListingActions.getPropertyListingDetails),
      tap(() => console.log('got here for property listing details !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.marketingService.getPropertyListingDetails(payload).pipe(
          map((listing: PropertyListing) => ({
            type: '[Marketing] Get Property Listing Details Success',
            payload: listing
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Property Listing Details Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(ListingActions.getPropertyListingDetailsFailure(error.message)))
        )
      )
    )
  );

  addPropertyListing$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(ListingActions.addPropertyListing),
      tap(() => console.log('got here to add property listing !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.marketingService.addPropertyListing(payload).pipe(
          map((listing: PropertyListing) => ({
            type: '[Marketing] Add Property Listing Success',
            payload: listing
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Add Property Listing Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(ListingActions.addPropertyListingFailure(error.message)))
        )
      )
    )
  );

  updatePropertyListing$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(ListingActions.updatePropertyListing),
      tap(() => console.log('got here to update property listing !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.marketingService.updatePropertyListing(payload).pipe(
          map((listing: PropertyListing) => ({
            type: '[Marketing] Update Property Listing Success',
            payload: listing
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Update Property Listing Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(ListingActions.updatePropertyListingStatusSuccess(error.message)))
        )
      )
    )
  );

  uploadPropertyImage$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(ListingActions.uploadPropertyImage),
      tap(() => console.log('got here to upload property image !!!')),
      // tslint:disable-next-line: no-unused-expression
      // map(action => {action.payload, action.rentalPropertyId; }),
      switchMap((action) =>
        this.marketingService.uploadPropertyImages(action.payload, action.rentalPropertyId).pipe(
          map((propertyImg: any) => ({
            type: '[Marketing] Upload Property Image Success',
            payload: propertyImg
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Update Property Listing Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(ListingActions.uploadPropertyImageFailure(error.message)))
        )
      )
    )
  );

  getRentalApplications$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(ListingActions.getRentalApplicationList),
      tap(() => console.log('got here for rental application list!!!')),
      switchMap(() =>
        this.marketingService.getAllRentalApplications().pipe(
          map((applications: RentalApplication[]) => ({
            type: '[Marketing] Get Rental Applications Success',
            payload: applications
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Rental Applications Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(ListingActions.getRentalApplicationListFailure(error.message)))
        )
      )
    )
  );

  getRentalApplicationDetails$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(ListingActions.getRentalApplicationDetails),
      tap(() => console.log('got here for rental application details !!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.marketingService.getRentalApplicationDetails(payload).pipe(
          map((application: RentalApplication) => ({
            type: '[Marketing] Get Rental Application Details Success',
            payload: application
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Get Property Listing Details Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(ListingActions.getRentalApplicationDetailsFailure(error.message)))
        )
      )
    )
  );

  updatePropertyListingStatus$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Property] Get Property List'),
      ofType(ListingActions.updatePropertyListingStatus),
      tap(() => console.log('got here to update property listing status!!!')),
      map(action => action.payload),
      switchMap((payload) =>
        this.marketingService.changeListingStatus(payload).pipe(
          map((listing: PropertyListing) => ({
            type: '[Marketing] Update Property Listing Status Success',
            payload: listing
          })),
          // tap(res => {console.log('response: ' + res); }),
          // catchError(
          //   err => {
          //     return of('[Marketing] Update Property Listing Failure', err.error);
          //   } // EMPTY
          // )
          catchError(error => of(ListingActions.updatePropertyListingStatusFailure(error.message)))
        )
      )
    )
  );


}
