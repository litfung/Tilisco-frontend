import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject, Subject } from 'rxjs';

import { connect } from  'socket.io-client';

import { environment } from '../../environments/environment';
import { MediasoupService } from './wss.mediasoup';

type IOSocket = SocketIOClient.Socket & { request: (ioEvent: string, data?: any) => Promise<any> };

@Injectable()
export class WssService {
  private socket: IOSocket;
  public mediasoup: MediasoupService;
  public mediaSource = new BehaviorSubject<boolean>(false)
  public ratio = 1
  public consumerHasLeft = new Subject<string>()

  constructor(
    private readonly logger: NGXLogger
  ) {}

  // tslint:disable-next-line: variable-name
  public connect(current_user_id: string, room, ratio) {
    this.ratio = ratio
    this.socket = connect(environment.wss_url, {
      query: {
        session_id: room,
        user_id: current_user_id,
      }
    }) as IOSocket;

    this.socket.request = (ioEvent: string, data: object = {}) => {
      return new Promise((resolve) => {
        this.socket.emit(ioEvent, data, resolve);
      });
    };

    this.mediasoup = new MediasoupService(this.socket);

    this.socket.on('connect', async () => {
      await this.mediasoup.load();
      await this.mediasoup.producerVideoStart(this.ratio);
      await this.mediasoup.producerAudioStart();
      this.mediaSource.next(true)
    });

    this.socket.on('mediaClientConnected', async (msg: { user_id: string }) => {
      console.log(msg)
      // pass
    });

    this.socket.on('mediaClientDisconnect', async (msg: { user_id: string }) => {
      console.log(msg, 'has left')
      this.consumerHasLeft.next(msg.user_id)
      await this.mediasoup.deletePeer(msg.user_id);
    });
  }
}
