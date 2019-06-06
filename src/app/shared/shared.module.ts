import { AppMaterialModule } from '@lib/app-material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [];
@NgModule({
  declarations: [
    SideNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SideNavComponent
  ]
})
export class SharedModule { }
