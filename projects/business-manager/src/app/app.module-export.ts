import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from '@lib/app-material';

import { AppBmComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MessageComponent } from './message/message.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: ManageHomeComponent,
    children: [
      { path: 'main', component: MainComponent},
      { path: 'tasks', component: TaskListComponent},
      { path: 'calendar', component: CalendarComponent},
      { path: 'messages', component: MessageComponent}
    ]
  }
  // { path: 'calendar', component: CalenderComponent }
  // { path: 'contracts', component: ContractListComponent }
];

@NgModule({
  declarations: [
    AppBmComponent,
    ManageHomeComponent,
    MessageComponent,
    MainComponent,
    TaskListComponent,
    CalendarComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    // AppRoutingModule
    AppMaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppBmComponent]
})
export class AppBmModule { }
