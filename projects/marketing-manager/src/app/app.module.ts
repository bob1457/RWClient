import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMkComponent } from './app.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';

@NgModule({
  declarations: [
    AppMkComponent,
    PropertyListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppMkComponent]
})
export class AppModule { }
