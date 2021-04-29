import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DefaultModule } from './layouts/default/default.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CalenderComponent } from './calender/calender.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ScheduleComponent } from './schedule/schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGrigPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { FormComponent } from './form/form.component';
//import {MatFormFieldModule} from '@angular/material/form-field';
import { MeetingRegisterComponent } from './modules/meeting-register/meeting-register.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ConfirmMeetingComponent } from './popup-model/confirm-meeting/confirm-meeting.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormMeetingComponent } from './popup-model/form-meeting/form-meeting.component';
import {MatMenuModule} from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterMeetingComponent } from './register-meeting/register-meeting.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
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










FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGrigPlugin,
  listPlugin ,
  bootstrapPlugin,
]);


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    CalenderComponent,
    ScheduleComponent,
    FormComponent,
    MeetingRegisterComponent,
    ConfirmMeetingComponent,
    FormMeetingComponent,
    RegisterMeetingComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SliderComponent,
    CandidateComponent,
    JoinMeetingComponent,
    DetailComponent,
    CompanyDetailComponent,
    CompanyDetailOneComponent,
    ChatNgrxComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    MatFormFieldModule,
    FullCalendarModule, // register FullCalendar with you app
    TooltipModule.forRoot(),
    NgxMaterialTimepickerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ ConfirmMeetingComponent]
})
export class AppModule { }
