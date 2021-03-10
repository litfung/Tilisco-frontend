import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-meeting',
  templateUrl: './confirm-meeting.component.html',
  styleUrls: ['./confirm-meeting.component.scss']
})
export class ConfirmMeetingComponent {
 

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmMeetingComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
