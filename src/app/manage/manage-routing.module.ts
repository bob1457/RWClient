import { ProfileComponent } from './../../../projects/auth/src/lib/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'Manage',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full'},
      { path: 'profile', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
