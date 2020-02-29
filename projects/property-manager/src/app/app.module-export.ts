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
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddPropertyComponent } from './add-property/add-property.component';

const routes: Routes = [
  { path: '', component: PropertyHomeComponent,
    children: [
      { path: 'propertylist', component: PropertyListComponent},
      { path: 'addproperty', component: AddPropertyComponent},
      { path: 'owners', component: OwnerListComponent},
      { path: 'contracts', component: ContractListComponent }
    ]
  },
  // { path: 'owners', component: OwnerListComponent,  outlet: 'property'},
  // { path: 'contracts', component: ContractListComponent }
];

@NgModule({
  declarations: [
    AppPmComponent,
    AddPropertyComponent,
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
    FlexLayoutModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('property', reducer)
  ],
  providers: [],

  bootstrap: [AppPmComponent]
})
export class AppPmModule { }
