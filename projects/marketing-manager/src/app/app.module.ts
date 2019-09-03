import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMkComponent } from './app.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { MarketingHomeComponent } from './marketing-home/marketing-home.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';

@NgModule({
  declarations: [
    AppMkComponent,
    PropertyListingComponent,
    MarketingHomeComponent,
    ListingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppMkComponent]
})
export class AppModule { }
