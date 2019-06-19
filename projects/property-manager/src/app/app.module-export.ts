import { AppMaterialModule } from '@lib/app-material';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppPmComponent } from './app.component';
import { PropertyHomeComponent } from './property-home/property-home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes = [
  { path: '', component: PropertyHomeComponent}
];

@NgModule({
  declarations: [
    AppPmComponent,
    PropertyHomeComponent,
    PropertyListComponent,
    PropertyDetailsComponent
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
