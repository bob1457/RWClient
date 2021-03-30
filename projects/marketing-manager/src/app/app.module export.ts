import { reducer } from './store/reducers/marketing.reducers';
import { AppMaterialModule } from '@lib/app-material';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMkComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MarketingEffects } from './store/effects/marketing.effects';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { MarketingHomeComponent } from './marketing-home/marketing-home.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ScreeningComponent } from './screening/screening.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AllOpenHousesComponent } from '../app/all-open-houses/all-open-houses.component';
import { OpenHouseDetailsComponent } from '../app/open-house-details/open-house-details.component';
import { OhStatusPipe } from './oh-status.pipe';
import { metaReducers } from './store/metaReducers';

const routes: Routes = [
  // { path: '', component: PropertyListingComponent},
  { path: '', component: MarketingHomeComponent,
    children: [
      { path: '', component: PropertyListingComponent},
      { path: 'listingDetails/:id', component: ListingDetailsComponent},
      { path: 'addListing', component: AddListingComponent},
      // { path: 'screening', component: ScreeningComponent},
      { path: 'applications', component: ApplicationListComponent},
      { path: 'applicationDetails/:id', component: ApplicationDetailsComponent},
      { path: 'screening/:id', component: ScreeningComponent},
      { path: 'screeninglist', component: ScreeningListComponent},
      { path: 'openhouses', component: AllOpenHousesComponent},
      { path: 'openhousedetails/:id', component: OpenHouseDetailsComponent}
    ]

  }//,
  // { path: 'applications', component: ApplicationListComponent}
];

@NgModule({
  declarations: [
    AppMkComponent,
    AddListingComponent,
    ApplicationDetailsComponent,
    PropertyListingComponent,
    MarketingHomeComponent,
    ListingDetailsComponent,
    ApplicationListComponent,
    ScreeningComponent,
    YesNoPipe,
    StatusPipe,
    LoadingComponent,
    ScreeningListComponent,
    ListingDetailsSideComponent,
    ListingDetailsMainComponent,
    ListingDetailsSecondaryComponent,
    OpenHouseDetailsComponent,
    AllOpenHousesComponent,
    AppStatusPipe,
    OhStatusPipe,
    AllOpenHousesComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('marketing', reducer, {metaReducers}),
    EffectsModule.forFeature([MarketingEffects])
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppMkComponent]
})
export class AppMkModule { }
