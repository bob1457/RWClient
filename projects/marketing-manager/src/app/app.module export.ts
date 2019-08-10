import { AppMaterialModule } from '@lib/app-material';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMkComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListingComponent } from './property-listing/property-listing.component';

const routes: Routes = [
  { path: '', component: PropertyListingComponent}
];

@NgModule({
  declarations: [
    AppMkComponent,
    PropertyListingComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(routes)
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppMkComponent]
})
export class AppMkModule { }
