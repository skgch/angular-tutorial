import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { MemberDetailComponent } from './member-detail.component';
import { MembersComponent } from './members.component';
import { MemeberService } from './member.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'members',
        component: MembersComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
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