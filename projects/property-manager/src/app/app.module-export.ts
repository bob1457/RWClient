import { ContractListComponent } from './contract-list/contract-list.component';
import { AppMaterialModule } from '@lib/app-material';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppPmComponent } from './app.component';
import { PropertyHomeComponent } from './property-home/property-home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { StoreModule } from '@ngrx/store';
import { p_reducer } from './store/reducers';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyDetailsBasicComponent } from './property-details-basic/property-details-basic.component';
import { PropertyDetailsFacilitiesComponent } from './property-details-facilities/property-details-facilities.component';
import { PropertyDetailsFeaturesComponent } from './property-details-features/property-details-features.component';
import { AddPropertyBasicComponent } from './add-property-basic/add-property-basic.component';
import { AddPropertyFeaturesComponent } from './add-property-features/add-property-features.component';
import { AddPropertyFacilitiesComponent } from './add-property-facilities/add-property-facilities.component';
import { AddPropertyFinishComponent } from './add-property-finish/add-property-finish.component';
import { AddPropertyOwnerComponent } from './add-property-owner/add-property-owner.component';
import { ContractContentComponent } from './contract-content/contract-content.component';
import { YesNoPipe } from './yes-no.pipe';
import { LoadingComponent } from './loading/loading.component';
import { MatSortModule, MatPaginatorModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { ContractHeaderComponent } from './contract-header/contract-header.component';
import { ContractFooterComponent } from './contract-footer/contract-footer.component';
import { ContractContentEditorComponent } from './contract-content-editor/contract-content-editor.component';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { TypePipe } from './type.pipe';
import { PropertyTypePipe } from './property-type.pipe';
// import { MatSortModule } from '@angular/material/sort';

import { metaReducers } from './store/metareducers';

// ngx-mask ref: https://www.npmjs.com/package/ngx-mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SignDatePipe } from './sign-date.pipe';
import { AddStrataDialogComponent } from './dialogs/add-strata-dialog/add-strata-dialog.component';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

const routes: Routes = [
  { path: '', component: PropertyHomeComponent,
    children: [
      { path: '', component: PropertyListComponent},
      { path: 'propertydetails/:id', component: PropertyDetailsComponent},
      { path: 'addproperty', component: AddPropertyComponent},
      { path: 'addowner', component: AddOwnerComponent},
      { path: 'addcontract', component: AddContractComponent},
      { path: 'owners', component: OwnerListComponent},
      { path: 'ownerdetails/:id', component: OwnerDetailsComponent},
      { path: 'contracts', component: ContractListComponent },
      { path: 'contractdetails/:id', component: ContractDetailsComponent},
      { path: 'contractview/:id', component: ContractViewComponent}
    ]
  }//,
  // { path: 'owners', component: OwnerListComponent,  outlet: 'property'},
  // { path: 'contracts', component: ContractListComponent }
];

@NgModule({
  declarations: [
    AppPmComponent,
    AddContractComponent,
    AddPropertyComponent,
    AddPropertyBasicComponent,
    AddPropertyFeaturesComponent,
    AddPropertyFacilitiesComponent,
    AddPropertyOwnerComponent,
    AddPropertyFinishComponent,
    AddOwnerComponent,
    PropertyHomeComponent,
    PropertyListComponent,
    PropertyDetailsComponent,
    PropertyDetailsBasicComponent,
    PropertyDetailsFacilitiesComponent,
    PropertyDetailsFeaturesComponent,
    OwnerListComponent,
    OwnerDetailsComponent,
    ContractListComponent,
    ContractDetailsComponent,
    ContractContentComponent,
    AddStrataDialogComponent,
    YesNoPipe,
    TypePipe,
    SignDatePipe,
    PropertyTypePipe,
    LoadingComponent,
    ContractHeaderComponent,
    ContractFooterComponent,
    ContractContentEditorComponent,
    ContractViewComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(routes),
    StoreModule.forFeature('property', p_reducer, {metaReducers})
  ],
  exports: [
    MatSortModule
  ],
  providers: [
    DatePipe
    // {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500, panelClass: ['notif']}}
  ],
  entryComponents:[
    AddStrataDialogComponent
  ],
  bootstrap: [AppPmComponent]
})
export class AppPmModule { }
