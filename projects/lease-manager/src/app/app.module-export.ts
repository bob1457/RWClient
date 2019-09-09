// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '@lib/app-material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppLMComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { AllLeasesComponent } from './all-leases/all-leases.component';

const routes: Routes = [
  { path: '', component: AllLeasesComponent }
];

@NgModule({
  declarations: [
    AppLMComponent,
    AllLeasesComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(routes)
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppLMComponent]
})
export class AppLMModule { }
