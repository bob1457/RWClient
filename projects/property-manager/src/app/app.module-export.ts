import { AppMaterialModule } from '@lib/app-material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppPmComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppPmComponent}
];

@NgModule({
  declarations: [
    AppPmComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    RouterModule.forChild(routes),
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppPmComponent]
})
export class AppPmModule { }
