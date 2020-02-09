import { AuthModule } from '@lib/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '@lib/app-material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
// import { ToolbarComponent } from './layout/toolbar/toolbar.component';


const routes: Routes = [];
@NgModule({
  declarations: [
    SideNavComponent,
    FooterComponent,
    ClockComponent,
    WeatherComponent,
    // ToolbarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AuthModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SideNavComponent
  ]
})
export class SharedModule { }
