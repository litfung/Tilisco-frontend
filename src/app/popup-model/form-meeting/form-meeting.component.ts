import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-meeting',
  templateUrl: './form-meeting.component.html',
  styleUrls: ['./form-meeting.component.scss']
})
export class FormMeetingComponent  {

 
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormMeetingComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The form was closed');
    });
  }

}
