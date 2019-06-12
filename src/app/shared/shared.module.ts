import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '@lib/app-material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';


const routes: Routes = [];
@NgModule({
  declarations: [
    SideNavComponent,
    FooterComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SideNavComponent
  ]
})
export class SharedModule { }
