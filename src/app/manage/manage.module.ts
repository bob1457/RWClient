import { DashboardModule } from '@lib/dashboard';
import { AppMaterialModule } from '@lib/app-material';


import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';
import { DashhomeComponent } from '@lib/dashboard';
import { DashboardComponent } from '@lib/dashboard';


@NgModule({
  declarations: [
    HomeComponent
    // DashhomeComponent,
    // DashboardComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedModule,
    FlexLayoutModule,
    AppMaterialModule,
    DashboardModule
  ],
  exports: [
    HomeComponent
    //DashhomeComponent
  ]
})
export class ManageModule { }
