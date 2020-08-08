// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '@lib/app-material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppLMComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { AllLeasesComponent } from './all-leases/all-leases.component';
import { AllTenantsComponent } from './all-tenants/all-tenants.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './store/reducers/lease.reducers';
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
import { AgreementViewComponent } from './agreement-view/agreement-view.component';
import { TermPipe } from './term.pipe';
import { RenewCodePipe } from './renew-code.pipe';


const routes: Routes = [
  // { path: '', component: AllLeasesComponent },
  { path: '', component: LeaseHomeComponent,
    children: [
      { path: '', component: AllLeasesComponent},
      { path: 'tenants', component: AllTenantsComponent},
      { path: 'leasedetails/:id', component: LeaseDetailsComponent},
      { path: 'addlease', component: AddLeaseComponent},
      { path: 'tenantdetails/:id', component: TenantDetailsComponent},
      { path: 'addtenant', component: AddTenantComponent}
      // { path: 'applications', component: ApplicationListComponent}
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
    TenantDetailsComponent,
    AgreementViewComponent,
    YesNoPipe,
    TermPipe,
    RenewCodePipe
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('lease', reducer),
    EffectsModule.forFeature([LeaseEffects])
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppLMComponent]
})
export class AppLMModule { }
