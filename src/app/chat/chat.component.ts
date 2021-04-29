import { Component, OnInit } from '@angular/core';
import { getTime } from 'ngx-bootstrap/chronos/utils/date-getters';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [`
    ::ng-deep nb-layout-column {
      justify-content: center;
      display: flex;
    }
    nb-chat {
      width: 500px;
      height: 80vw;
    }
  `],

})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  messages: any[] = [
    {
      text: 'MediaSoup Files',
      date: new Date(),
      reply: true,
      user: {
        name: 'Rami-H',
        avatar: 'https://i.gifer.com/no.gif',
      },
    },
  ];

  sendMessage(event) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      files: files,
      type: files.length ? 'file' : 'text',
      reply: true,
      user: {
        name: 'Rami Hadef',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
  }

}
