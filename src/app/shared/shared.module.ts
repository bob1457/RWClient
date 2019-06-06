import { AppMaterialModule } from '@lib/app-material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './layout/side-nav/side-nav.component';

@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    SideNavComponent
  ]
})
export class SharedModule { }
