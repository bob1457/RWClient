import { state } from '@angular/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from '@lib/app-material';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashhomeComponent } from './dashhome/dashhome.component';
import { LayoutModule } from '@angular/cdk/layout';
import { reducer } from './store/dash.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    DashboardComponent,
    DashhomeComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    AppMaterialModule,
    StoreModule.forFeature('dashboard', reducer)
  ],
  exports: [
    DashboardComponent,
    DashhomeComponent
  ]
})
export class DashboardModule { }


