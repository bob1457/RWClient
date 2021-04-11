import { DashboardModule } from '@lib/dashboard';
import { AppMaterialModule } from '@lib/app-material';


import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent    
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
  ]
})
export class ManageModule { }
