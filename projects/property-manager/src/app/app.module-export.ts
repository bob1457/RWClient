import { ContractListComponent } from './contract-list/contract-list.component';
import { AppMaterialModule } from '@lib/app-material';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppPmComponent } from './app.component';
import { PropertyHomeComponent } from './property-home/property-home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';
import { OwnerListComponent } from './owner-list/owner-list.component';

const routes: Routes = [
  { path: '', component: PropertyHomeComponent},
  { path: 'owners', component: OwnerListComponent },
  { path: 'contracts', component: ContractListComponent }
];

@NgModule({
  declarations: [
    AppPmComponent,
    PropertyHomeComponent,
    PropertyListComponent,
    PropertyDetailsComponent,
    OwnerListComponent,
    ContractListComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('property', reducer)
  ],
  providers: [],

  bootstrap: [AppPmComponent]
})
export class AppPmModule { }
