import { AppMaterialModule } from '@lib/app-material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppPmComponent } from './app.component';
import { PropertyHomeComponent } from './property-home/property-home.component';


@NgModule({
  declarations: [
    AppPmComponent,
    PropertyHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppPmComponent]
})
export class AppModule { }
