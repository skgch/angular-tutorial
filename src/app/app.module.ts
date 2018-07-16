import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { MemberDetailComponent } from './member-detail.component';
import { MembersComponent } from './members.component';
import { MemeberService } from './member.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MemberDetailComponent,
    MembersComponent
  ],
  bootstrap:    [
    AppComponent
  ],
  providers: [
    MemeberService
  ]
})
export class AppModule { }
