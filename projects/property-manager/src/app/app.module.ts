import { AppCoreModule } from '@lib/app-core';
import { AppMaterialModule } from '@lib/app-material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppPmComponent } from './app.component';
import { PropertyHomeComponent } from './property-home/property-home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';


@NgModule({
  declarations: [
    AppPmComponent,
    PropertyHomeComponent,
    PropertyListComponent,
    PropertyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    AppCoreModule
  ],
  providers: [],
  bootstrap: [AppPmComponent]
})
export class AppModule { }
