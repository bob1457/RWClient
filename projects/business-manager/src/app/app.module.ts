import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppBmComponent } from './app.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';

@NgModule({
  declarations: [
    AppBmComponent,
    ManageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppBmComponent]
})
export class AppModule { }
