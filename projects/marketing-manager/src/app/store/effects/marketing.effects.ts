import { PropertyListing } from '@lib/app-core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MarketingService } from '@lib/app-core';
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


}
