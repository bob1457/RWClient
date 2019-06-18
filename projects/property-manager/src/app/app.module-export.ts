import { AppMaterialModule } from '@lib/app-material';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppPmComponent } from './app.component';
import { PropertyHomeComponent } from './property-home/property-home.component';

const routes: Routes = [
  { path: '', component: PropertyHomeComponent}
];

@NgModule({
  declarations: [
    AppPmComponent,
    PropertyHomeComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [],

  bootstrap: [AppPmComponent]
})
export class AppPmModule { }
