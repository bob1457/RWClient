import { EffectsModule } from '@ngrx/effects';
import { AppCoreModule } from '@lib/app-core';
import { AppMaterialModule } from '@lib/app-material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppPmComponent } from './app.component';
import { PropertyHomeComponent } from './property-home/property-home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';
import { PropertyEffects } from './store/effects/property.effects';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';


@NgModule({
  declarations: [
    AppPmComponent,
    PropertyHomeComponent,
    PropertyListComponent,
    PropertyDetailsComponent,
    OwnerListComponent,
    ContractListComponent,
    AddPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    AppCoreModule,
    StoreModule.forRoot([]),
    StoreModule.forFeature('property', reducer),
    EffectsModule.forFeature([PropertyEffects])
  ],
  providers: [],
  bootstrap: [AppPmComponent]
})
export class AppModule { }
