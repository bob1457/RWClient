import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppLMComponent } from './app.component';
import { AllLeasesComponent } from './all-leases/all-leases.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/reducers/lease.reducers';
import { LeaseEffects } from './store/effects/lease.effects';
import { AllTenantsComponent } from './all-tenants/all-tenants.component';
import { LeaseHomeComponent } from './lease-home/lease-home.component';
import { LeaseDetailsComponent } from './lease-details/lease-details.component';
import { AddLeaseComponent } from './add-lease/add-lease.component';
import { AddTenantComponent } from './add-tenant/add-tenant.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { YesNoPipe } from './yes-no.pipe';
import { LoadingComponent } from './loading/loading.component';
import { AgreementViewComponent } from './agreement-view/agreement-view.component';
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
    AgreementViewComponent,
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
    VendorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forFeature('lease', reducer),
    EffectsModule.forFeature([LeaseEffects])
  ],
  providers: [],
  bootstrap: [AppLMComponent]
})
export class AppModule { }
