import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; 

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

 /* calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

   calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
   
  };

  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr)
  } */


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      { title: 'event 1', date: '2020-08-12'},
      { title: 'event 1', date: '2020-08-12'},
      { title: 'event 1', date: '2020-08-12'},
      { title: 'event 1', date: '2020-08-12'},
      { title: 'event 1', date: '2020-08-12'},
      { title: 'event 1', date: '2020-08-12'},
      { title: 'event 1', date: '2020-08-12'},
      { title: 'event 1', date: '2020-08-12'},
      { title: 'event 1', date: '2020-08-12'},
      { title: 'event 2', date: '2020-08-11'},
    ]
  };

 
  
  constructor() { }

  ngOnInit(): void {
  }

}
