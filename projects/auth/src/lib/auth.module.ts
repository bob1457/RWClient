import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from '@lib/app-material';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  exports: [
    AuthComponent,
    LoginComponent
  ]
})
export class AuthModule { }
