import { AuthEffects } from './../../projects/auth/src/lib/store/auth.effects';
import { JwtInterceptor } from './helpers/JwtInterceptor';

import * as fromStore from './store/router.reducer';

// import { AppMaterialModule } from './app-material/app-material.module';
import { AppMaterialModule } from '@lib/app-material' ; //      ../../projects/app-material/src/lib/app-material.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ManageModule } from './manage/manage.module';
import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer, routerReducer, RouterState } from '@ngrx/router-store';
import { PropertyEffects } from 'projects/property-manager/src/app/store/effects/property.effects';
import { FlexLayoutModule, LayoutGapStyleBuilder } from '@angular/flex-layout';

import { metaReducers } from './store/metareducres';
import { CustomLayoutGapStyleBuilder } from './shared/LayoutGapBuilder';
import { appReducer } from './store/app.state';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'yyy'
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    ManageModule,
    SharedModule,
    EffectsModule.forRoot([AuthEffects, PropertyEffects]),
    StoreModule.forRoot(appReducer,
      {
        // metaReducers,
        runtimeChecks: {
          strictActionImmutability: false,
          strictActionSerializability: false,
          strictStateImmutability: true,
          strictStateSerializability: true
        }
      }),
    StoreRouterConnectingModule.forRoot(
      {
        routerState: RouterState.Minimal,
        serializer: fromStore.CustomSerializer
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi: true },
    { provide: LayoutGapStyleBuilder, useClass: CustomLayoutGapStyleBuilder },
    { provide: RouterStateSerializer, useClass: fromStore.CustomSerializer }
  ],
  exports: [ AgmCoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
