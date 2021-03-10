import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MediasoupService } from 'src/app/wss/wss.mediasoup';

@Component({
  selector: 'app-control-menu',
  templateUrl: './control-menu.component.html',
  styleUrls: ['./control-menu.component.scss']
})
export class ControlMenuComponent implements OnInit {
  @Output() toggleChat  = new EventEmitter<boolean>();
  @Output() audioState  = new EventEmitter<boolean>();  
  @Output() videoState  = new EventEmitter<boolean>();
  isFeatureOpned : boolean = false;
  ischatOpned : boolean = false;
  state=false;
  public mediasoup: MediasoupService;

  constructor( ) { 
   }
    
  ngOnInit(): void {
  
  } 
  openFeature():void{
    this.isFeatureOpned = !this.isFeatureOpned;
  }
  
  Audio():void{
    
    this.audioState.emit(false);
  }
  Video():void{
    
    this.videoState.emit(false);
  }

  openChat():void{
    //this.ischatOpned = !this.ischatOpned;
    //emmiter event output a chaque fois on ajout un evement pour chaque clique
    this.toggleChat.emit(true);
  }
    }
   
    




  


