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
    YesNoPipe
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
