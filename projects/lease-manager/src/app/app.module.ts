import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppLMComponent } from './app.component';
import { AllLeasesComponent } from './all-leases/all-leases.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { l_reducer } from './store/reducers/lease.reducers';
import { LeaseEffects } from './store/effects/lease.effects';
import { AllTenantsComponent } from './all-tenants/all-tenants.component';
import { LeaseHomeComponent } from './lease-home/lease-home.component';
import { LeaseDetailsComponent } from './lease-details/lease-details.component';
import { AddLeaseComponent } from './add-lease/add-lease.component';
import { AddTenantComponent } from './add-tenant/add-tenant.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { YesNoPipe } from './yes-no.pipe';
import { LoadingComponent } from './loading/loading.component';
import { AgreementPartyViewComponent } from './agreement-party-view/agreement-party-view.component';
import { TermPipe } from './term.pipe';
import { RenewCodePipe } from './renew-code.pipe';
import { AllWorkOrdersComponent } from './all-work-orders/all-work-orders.component';
import { AddWorkOrderComponent } from './add-work-order/add-work-order.component';
import { WorkOrderDetailsComponent } from './work-order-details/work-order-details.component';
import { OpenHouseDetailsComponent } from './open-house-details/open-house-details.component';
import { AllOpenHousesComponent } from './all-open-houses/all-open-houses.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkorderDetailsDialogComponent } from './dialogs/workorder-details-dialog/workorder-details-dialog.component';
import { AgreementPartyView2Component } from './agreement-party-view2/agreement-party-view2.component';
import { AddendumViewComponent } from './addendum-view/addendum-view.component';
import { AddAddendumComponent } from './add-addendum/add-addendum.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { TypePipe } from './type.pipe';
import { AddServiceRequestComponent } from './add-service-request/add-service-request.component';
import { AppStatusPipe } from './app-status.pipe';
import { MutualAgreementComponent } from './mutual-agreement/mutual-agreement.component';
import { NoticeTypePipe } from './notice-type.pipe';
import { AddNoticeDialogComponent } from './dialogs/add-notice-dialog/add-notice-dialog.component';
import { ActivePipe } from './active.pipe';
import { NoticeDetailsDialogComponent } from './dialogs/notice-details-dialog/notice-details-dialog.component';
import { ServeMethodPipe } from './serve-method.pipe';
import { NoticeContentTenDayComponent } from './notice-content-ten-day/notice-content-ten-day.component';
import { NoticeContentOneMonthComponent } from './notice-content-one-month/notice-content-one-month.component';
import { NoticeContentTwoMonthComponent } from './notice-content-two-month/notice-content-two-month.component';
import { UpdateStatusDialogComponent } from './dialogs/update-status-dialog/update-status-dialog.component';
import { AddAddendemDialogComponent } from './dialogs/add-addendem-dialog/add-addendem-dialog.component';
// import { AddendumDetailsDialgoComponent } from './dialogs/addendum-details-dialgo/addendum-details-dialgo.component';
import { NoticeViewComponent } from './notice-view/notice-view.component';


@NgModule({
  declarations: [
    AppLMComponent,
    AllLeasesComponent,
    AllTenantsComponent,
    LeaseHomeComponent,
    LeaseDetailsComponent,
    AddLeaseComponent,
    AddTenantComponent,
    TenantDetailsComponent,
    YesNoPipe,
    LoadingComponent,
    AgreementPartyViewComponent,
    TermPipe,
    RenewCodePipe,
    AllWorkOrdersComponent,
    AddWorkOrderComponent,
    WorkOrderDetailsComponent,
    OpenHouseDetailsComponent,
    AllOpenHousesComponent,
    ServieRequestListComponent,
    ServieRequestDetailsComponent,
    VendorDetailsComponent,
    VendorListComponent,
    UrgentLevelPipe,
    StatusPipe,
    WorkOrderDatePipe,
    PaymentMethodPipe,
    PaymentDetailsDialogComponent,
    AddRentDialogComponent,
    FullLeaseAgreementComponent,
    AgreementHeaderComponent,
    AgreementContentComponent,
    WorkorderDetailsDialogComponent,
    AgreementPartyView2Component,
    AddendumViewComponent,
    AddAddendumComponent,
    AddVendorComponent,
    TypePipe,
    AddServiceRequestComponent,
    AppStatusPipe,
    MutualAgreementComponent,
    NoticeTypePipe,
    AddNoticeDialogComponent,
    ActivePipe,
    NoticeDetailsDialogComponent,
    ServeMethodPipe,
    NoticeContentTenDayComponent,
    NoticeContentOneMonthComponent,
    NoticeContentTwoMonthComponent,
    UpdateStatusDialogComponent,
    AddAddendemDialogComponent,
    AddendumDetailsDialgoComponent,
    NoticeViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forFeature('lease', l_reducer),
    EffectsModule.forFeature([LeaseEffects])
  ],
  providers: [],
  entryComponents: [
    PaymentDetailsDialogComponent
  ],
  bootstrap: [AppLMComponent]
})
export class AppModule { }
