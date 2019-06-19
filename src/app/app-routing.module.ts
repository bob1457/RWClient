import { HomeComponent } from './manage/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, AuthModule } from '@lib/auth';

const routes: Routes = [
  {path: '', component: LoginComponent} // ,
  // {path: 'property', loadChildren: '../../projects/property-manager/src/app/app.module-export#AppPmModule'}
];


@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
