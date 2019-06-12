
// import { DashboardComponent } from './../../../projects/dashboard/src/lib/dashboard.component';
import { ProfileComponent } from './../../../projects/auth/src/lib/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashhomeComponent } from '../../../projects/dashboard/src/lib/dashhome/dashhome.component';
import { DashboardComponent } from '@lib/dashboard';

const routes: Routes = [
  {path: 'Manage',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'profile', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
