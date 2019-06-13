import { AppMaterialModule } from '@lib/app-material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppPmComponent } from './app.component';

@NgModule({
  declarations: [
    AppPmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppPmComponent]
})
export class AppModule { }
