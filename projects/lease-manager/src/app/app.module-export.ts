// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { AppMaterialModule } from '@lib/app-material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppLMComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { AllLeasesComponent } from './all-leases/all-leases.component';
import { AllTenantsComponent } from './all-tenants/all-tenants.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { l_reducer } from './store/reducers/lease.reducers';
import { LeaseEffects } from './store/effects/lease.effects';
import { LeaseHomeComponent } from './lease-home/lease-home.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { AddTenantComponent } from './add-tenant/add-tenant.component';
import { AddLeaseComponent } from './add-lease/add-lease.component';
import { LeaseDetailsComponent } from './lease-details/lease-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YesNoPipe } from './yes-no.pipe';
import { LoadingComponent } from './loading/loading.component';
import { AgreementPartyViewComponent } from './agreement-party-view/agreement-party-view.component';
import { TermPipe } from './term.pipe';
import { RenewCodePipe } from './renew-code.pipe';
import { AllWorkOrdersComponent } from './all-work-orders/all-work-orders.component';
import { AddWorkOrderComponent } from './add-work-order/add-work-order.component';
import { WorkOrderDetailsComponent } from './work-order-details/work-order-details.component';
import { ServieRequestListComponent } from './servie-request-list/servie-request-list.component';
import { ServieRequestDetailsComponent } from './servie-request-details/servie-request-details.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { UrgentLevelPipe } from './urgent-level.pipe';
import { StatusPipe } from './status.pipe';
import { WorkOrderDatePipe } from './work-order-date.pipe';
import { PaymentMethodPipe } from './payment-method.pipe';
import { PaymentDetailsDialogComponent } from './dialogs/payment-details-dialog/payment-details-dialog.component';
import { AddRentDialogComponent } from './dialogs/add-rent-dialog/add-rent-dialog.component';
import { FullLeaseAgreementComponent } from './full-lease-agreement/full-lease-agreement.component';
import { AgreementHeaderComponent } from './agreement-header/agreement-header.component';
import { AgreementContentComponent } from './agreement-content/agreement-content.component';
import { WorkorderDetailsDialogComponent } from './dialogs/workorder-details-dialog/workorder-details-dialog.component';
import { AgreementPartyView2Component } from './agreement-party-view2/agreement-party-view2.component';
import { AddendumViewComponent } from './addendum-view/addendum-view.component';
import { AddAddendumComponent } from './add-addendum/add-addendum.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { TypePipe } from './type.pipe';
import { AddServiceRequestComponent } from './add-service-request/add-service-request.component';
// import { CdkColumnDef } from '@angular/cdk/table';
import { AppStatusPipe } from './app-status.pipe';


const routes: Routes = [
  // { path: '', component: AllLeasesComponent },
  { path: '', component: LeaseHomeComponent,
    children: [
      { path: '', component: AllLeasesComponent},
      { path: 'tenants', component: AllTenantsComponent},
      { path: 'leasedetails/:id', component: LeaseDetailsComponent},
      // { path: 'leasedetails/rentpayment/:id': }
      { path: 'addlease', component: AddLeaseComponent},
      { path: 'tenantdetails/:id', component: TenantDetailsComponent},
      { path: 'addtenant', component: AddTenantComponent},
      { path: 'workorders', component: AllWorkOrdersComponent},
      { path: 'workorderdetails/:id', component: WorkOrderDetailsComponent},
      { path: 'servicerequests', component: ServieRequestListComponent},
      { path: 'servicerequestdetails/:id', component: ServieRequestDetailsComponent},
      { path: 'vendors', component: VendorListComponent},
      { path: 'vendordetails/:id', component: VendorDetailsComponent},
      { path: 'agreementview/:id', component: FullLeaseAgreementComponent},
      { path: 'addendumview/:id', component: AddendumViewComponent},
      { path: 'addaddendum', component: AddAddendumComponent},
      { path: 'addVendor', component: AddVendorComponent},
      { path: 'addRequest', component: AddServiceRequestComponent}
    ]
  }//,
  // { path: 'tenants', component: AllTenantsComponent}
];

@NgModule({
  declarations: [
    AppLMComponent,
    AllLeasesComponent,
    AllTenantsComponent,
    LeaseHomeComponent,
    LeaseDetailsComponent,
    LoadingComponent,
    AddLeaseComponent,
    AddTenantComponent,
    AddendumViewComponent,
    TenantDetailsComponent,
    AgreementPartyViewComponent,
    YesNoPipe,
    TermPipe,
    RenewCodePipe,
    AllWorkOrdersComponent,
    AddWorkOrderComponent,
    WorkOrderDetailsComponent,
    ServieRequestListComponent,
    ServieRequestDetailsComponent,
    VendorDetailsComponent,
    VendorListComponent,
    UrgentLevelPipe,
    StatusPipe,
    WorkOrderDatePipe,
    PaymentMethodPipe,
    PaymentDetailsDialogComponent,
    WorkorderDetailsDialogComponent,
    AddRentDialogComponent,
    FullLeaseAgreementComponent,
    AgreementHeaderComponent,
    AgreementContentComponent,
    AgreementPartyView2Component,
    AddendumViewComponent,
    AddAddendumComponent,
    AddVendorComponent,
    TypePipe,
    AddServiceRequestComponent,
    AppStatusPipe
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('lease', l_reducer),
    EffectsModule.forFeature([LeaseEffects])
    // AppRoutingModule
  ],
  providers: [
    // CdkColumnDef providers: [DatePipe]
    DatePipe
  ],
  entryComponents: [
    PaymentDetailsDialogComponent,
    WorkorderDetailsDialogComponent,
    AddRentDialogComponent
  ],
  bootstrap: [AppLMComponent]
})
export class AppLMModule { }
