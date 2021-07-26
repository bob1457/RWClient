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
import { p_reducer } from './store/reducers';
import { PropertyEffects } from './store/effects/property.effects';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { PropertyDetailsBasicComponent } from './property-details-basic/property-details-basic.component';
import { PropertyDetailsFeaturesComponent } from './property-details-features/property-details-features.component';
import { PropertyDetailsFacilitiesComponent } from './property-details-facilities/property-details-facilities.component';
import { AddPropertyFacilitiesComponent } from './add-property-facilities/add-property-facilities.component';
import { AddPropertyFeaturesComponent } from './add-property-features/add-property-features.component';
import { AddPropertyBasicComponent } from './add-property-basic/add-property-basic.component';
import { AddPropertyFinishComponent } from './add-property-finish/add-property-finish.component';
import { AddPropertyOwnerComponent } from './add-property-owner/add-property-owner.component';
import { YesNoPipe } from './yes-no.pipe';
import { ContractContentComponent } from './contract-content/contract-content.component';
import { LoadingComponent } from './loading/loading.component';
import { MatSortModule, MatPaginator, MatPaginatorModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { ContractHeaderComponent } from './contract-header/contract-header.component';
import { ContractFooterComponent } from './contract-footer/contract-footer.component';
import { ContractContentEditorComponent } from './contract-content-editor/contract-content-editor.component';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { TypePipe } from './type.pipe';
import { PropertyTypePipe } from './property-type.pipe';
import { SignDatePipe } from './sign-date.pipe';
import { AddStrataDialogComponent } from './dialogs/add-strata-dialog/add-strata-dialog.component';
import { StrataCouncilListComponent } from './strata-council-list/strata-council-list.component';


@NgModule({
  declarations: [
    AppPmComponent,
    PropertyHomeComponent,
    PropertyListComponent,
    PropertyDetailsComponent,
    OwnerListComponent,
    ContractListComponent,
    AddPropertyComponent,
    AddOwnerComponent,
    AddContractComponent,
    ContractDetailsComponent,
    OwnerDetailsComponent,
    PropertyDetailsBasicComponent,
    PropertyDetailsFeaturesComponent,
    PropertyDetailsFacilitiesComponent,
    AddPropertyFacilitiesComponent,
    AddPropertyFeaturesComponent,
    AddPropertyBasicComponent,
    AddPropertyFinishComponent,
    AddPropertyOwnerComponent,
    YesNoPipe,
    ContractContentComponent,
    LoadingComponent,
    ContractHeaderComponent,
    ContractFooterComponent,
    ContractContentEditorComponent,
    ContractViewComponent,
    TypePipe,
    PropertyTypePipe,
    SignDatePipe,
    AddStrataDialogComponent,
    StrataCouncilListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    AppCoreModule,
    MatSortModule,
    MatPaginatorModule,
    StoreModule.forRoot([]),
    StoreModule.forFeature('property', p_reducer),
    EffectsModule.forFeature([PropertyEffects])
  ],
  providers: [
    // {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500, panelClass: ['notif']}}
  ],
  bootstrap: [AppPmComponent]
})
export class AppModule { }

