import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ManageModule { }
