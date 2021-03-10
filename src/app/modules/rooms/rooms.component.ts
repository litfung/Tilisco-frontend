import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { ConfirmMeetingComponent } from 'src/app/popup-model/confirm-meeting/confirm-meeting.component';
import { FormMeetingComponent } from 'src/app/popup-model/form-meeting/form-meeting.component';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="30%";


    this.dialog.open( ConfirmMeetingComponent,dialogConfig);
  }
  openForm(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";


    this.dialog.open( FormMeetingComponent,dialogConfig);
  }
}
