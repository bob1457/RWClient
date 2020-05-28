import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppBmComponent } from './app.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MessageComponent } from './message/message.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppBmComponent,
    ManageHomeComponent,
    TaskListComponent,
    CalendarComponent,
    MessageComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppBmComponent]
})
export class AppModule { }
