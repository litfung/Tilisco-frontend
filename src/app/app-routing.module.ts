import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DefaultComponent } from './layouts/default/default.component';
import { CallComponent } from './modules/call/call.component';
import { ConversationComponent } from './modules/conversation/conversation.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RoomsComponent } from './modules/rooms/rooms.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MeetingRegisterComponent } from './modules/meeting-register/meeting-register.component';
import { RegisterMeetingComponent } from './register-meeting/register-meeting.component';
import { NotificationComponent } from './modules/notification/notification.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { SliderComponent } from './authentication/slider/slider.component';
import { CandidateComponent } from './authentication/candidate/candidate.component';
import { JoinMeetingComponent } from './authentication/join-meeting/join-meeting.component';
import { DetailComponent } from './authentication/detail/detail.component';
import { CompanyDetailComponent } from './authentication/company-detail/company-detail.component';
import { CompanyDetailOneComponent } from './authentication/company-detail-one/company-detail-one.component';
import { ChatNgrxComponent } from './chat-ngrx/chat-ngrx.component';

const routes: Routes = [{ 
  path:'',
  component : DefaultComponent,
 


  children: [{
      path:'',
      component : DashboardComponent
    },{
      path:'conversation',
      component : ConversationComponent
    },{
      path:'call',
      component : CallComponent
    } ,{
      path:'room',
      component : RoomsComponent
    },{
      path:'contactList',
      component : ContactListComponent
    } ,{
      path:'calandrier',
      component : CalenderComponent
    } ,{
      path:'date',
      component : ScheduleComponent
    },
   {
      path:'meeting',
      component : MeetingRegisterComponent
    },
    {
      path:'register',
      component : RegisterMeetingComponent
    },
    {
      path:'notifier',
      component : NotificationComponent
    },
    {
      path:'chat-ngrx',
      component : ChatNgrxComponent
    }
    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
