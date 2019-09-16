import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from '@lib/app-material';

import { AppBmComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { ManageHomeComponent } from './manage-home/manage-home.component';

const routes: Routes = [
  { path: '', component: ManageHomeComponent},
  // { path: 'owners', component: OwnerListComponent },
  // { path: 'contracts', component: ContractListComponent }
];

@NgModule({
  declarations: [
    AppBmComponent,
    ManageHomeComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    // AppRoutingModule
    AppMaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppBmComponent]
})
export class AppBmModule { }
