import { Component, ElementRef, NgZone, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { UserSettingService } from 'src/app/user-setting.service';
import { WssService } from 'src/app/wss/wss.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  @ViewChild('video', { static: true }) video: ElementRef<HTMLVideoElement>
  /* id=chatpanel  */
  @ViewChild('chatP') chatP: ElementRef
  @ViewChild('content') content: ElementRef
  @ViewChildren('consumerVideo') consumerVideo: QueryList<ElementRef<HTMLVideoElement>>
  @ViewChildren('consumerAudio') consumerAudio: QueryList<ElementRef<HTMLAudioElement>>
  public room = ""
  public name = "aaa"
  public streamGlobal
  public initSub
  public users = []
  public nameOnScreen = ""
  isChatPanelOpened = false
  public state=false;
  public stateCam=false;
  private user_id: string = Math.random().toString();
  constructor(
    private readonly logger: NGXLogger,
    private wssService: WssService,
    private zone: NgZone,
    private _activatedRoute: ActivatedRoute,
    private _renderer: Renderer2,
    private _router: Router,
    private _userSetting: UserSettingService
  ) {
    this.room = this._activatedRoute.snapshot.params["room"]
  }

  ngOnInit(): void {
    this.user_id = this.name + '-' + this.user_id
    this.wssService.connect(this.user_id, this.room, Math.floor(window.innerWidth / window.innerHeight));


    this.wssService.mediaSource.subscribe(isConnect => {
      if (isConnect) {
        this.streamGlobal = this.wssService.mediasoup.producerVideoStream;
        console.log(this.streamGlobal)
        this.video.nativeElement.srcObject = this.streamGlobal
        this.users = Array.from(this.wssService.mediasoup.consumersVideoStream.keys()).filter(el => el != this.user_id);


        this.users = Array.from(this.wssService.mediasoup.consumersVideoStream.keys()).filter(el => el != this.user_id);

        this.wssService.mediasoup.load().then(el => {
          this.users.forEach((peer) => {
            this.consumerVideo.find(el => el.nativeElement.id == peer).nativeElement.srcObject =
              this.wssService.mediasoup.consumersVideoStream.get(peer);
            this.consumerAudio.find(el => el.nativeElement.id == peer).nativeElement.srcObject =
              this.wssService.mediasoup.consumersAudioStream.get(peer);
          })

        })
        this.initSub = this.wssService.mediasoup.init.subscribe(el => {


          this.users = Array.from(this.wssService.mediasoup.consumersVideoStream.keys()).filter(el => el != this.user_id);


          this.wssService.mediasoup.load().then(el => {
            this.users.forEach((peer) => {
              this.consumerVideo.find(el => el.nativeElement.id == peer).nativeElement.srcObject =
                this.wssService.mediasoup.consumersVideoStream.get(peer);
              this.consumerAudio.find(el => el.nativeElement.id == peer).nativeElement.srcObject =
                this.wssService.mediasoup.consumersAudioStream.get(peer);
            })

          })
        })
        this.wssService.consumerHasLeft.subscribe(id => {
          this.users = this.users.filter(el => el != id)
        })

      }
    })
  }

   
  changeSream(id) {
    console.log("ooooooooooooooooooooooooooooo")
    //console.log(this.consumerVideo.find(el => el.nativeElement.id == id).nativeElement.srcObject)
    //this.video.nativeElement.srcObject = this.consumerVideo.find(el => el.nativeElement.id == id).nativeElement.srcObject
    //this.nameOnScreen = id.split('-')[0]
  }
  ngOnDestroy() {
    if (this.initSub != undefined) this.initSub.unsubscribe()
  }
  
  
  openChat(event: boolean): void {

    if (event) {
      
      if (this.isChatPanelOpened){
        this._renderer.setStyle(this.chatP.nativeElement, "transform", "translate(100%,0%)");
        this._renderer.setStyle(this.content.nativeElement, "width", "100%");
        
      }
      else{
        this._renderer.setStyle(this.chatP.nativeElement, "transform", "translate(0%,0%)");
        this._renderer.setStyle(this.content.nativeElement, "width", "70%");

      }
        
      this.isChatPanelOpened = !this.isChatPanelOpened
    }
  }
  actdisAudio(event: boolean): void{
    console.log('actdisaudio works');
    
    console.log(this.state)

  //if audio producer is paused
   if (   !this.state)
    { 
      this.wssService.mediasoup.producerAudioPause()
      this.state=true;
    console.log('audio paused')
    } 
    else
     {
      this.wssService.mediasoup.producerAudioResume()
      this.state=false;
      console.log('audio resume')
     }
  }
  ActiveDisaWebCam(event : boolean) :void{
    if(!this.stateCam)
    {
      this.wssService.mediasoup.producerVideoPause();
      this.stateCam=true;
      console.log('audio paused')
    }
    else
   { 
    this.wssService.mediasoup.producerVideoResume()
    this.stateCam=false;
    console.log('audio resume')
   }
  }
}
    


