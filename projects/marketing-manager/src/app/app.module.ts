import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMkComponent } from './app.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { MarketingHomeComponent } from './marketing-home/marketing-home.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { reducer } from './store/reducers/marketing.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MarketingEffects } from './store/effects/marketing.effects';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ScreeningComponent } from './screening/screening.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { YesNoPipe } from './yes-no.pipe';
import { LoadingComponent } from './loading/loading.component';
import { ScreeningListComponent } from './screening-list/screening-list.component';
import { StatusPipe } from './status.pipe';
import { ListingDetailsSideComponent } from './listing-details-side/listing-details-side.component';
import { ListingDetailsMainComponent } from './listing-details-main/listing-details-main.component';
import { ListingDetailsSecondaryComponent } from './listing-details-secondary/listing-details-secondary.component';
import { AppStatusPipe } from './app-status.pipe';
import { OhStatusPipe } from './oh-status.pipe';
import { EmpyStatusPipe } from './empy-status.pipe';
import { ImStatusPipe } from './im-status.pipe';

@NgModule({
  declarations: [
    AppMkComponent,
    PropertyListingComponent,
    MarketingHomeComponent,
    ListingDetailsComponent,
    ApplicationListComponent,
    ScreeningComponent,
    AddListingComponent,
    ApplicationDetailsComponent,
    YesNoPipe,
    LoadingComponent,
    ScreeningListComponent,
    StatusPipe,
    ListingDetailsSideComponent,
    ListingDetailsMainComponent,
    ListingDetailsSecondaryComponent,
    AppStatusPipe,
    OhStatusPipe,
    EmpyStatusPipe,
    ImStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot([]),
    StoreModule.forFeature('marketing', reducer),
    EffectsModule.forFeature([MarketingEffects])
  ],
  providers: [],
  bootstrap: [AppMkComponent]
})
export class AppModule { }
