import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from '@lib/app-material';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashhomeComponent } from './dashhome/dashhome.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    DashboardComponent,
    DashhomeComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppMaterialModule
  ],
  exports: [
    DashboardComponent,
    DashhomeComponent
  ]
})
export class DashboardModule { }


