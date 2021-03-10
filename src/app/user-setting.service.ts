import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSettingService {

  constructor() { }

  private name : string = "" 
  private room : string = "" 
  private video : boolean = true
  private audio : boolean = true

  set setName(name: string){
    this.name = name
  }
  get getName(){
    return this.name
  }

  set setRoom(room: string){
    this.room = room
  }
  get getRoom(){
    return this.room
  }


  set setStartVideo(type: boolean){
    this.video = type
  }
  get getStartVideo(){
    return this.video
  }

  set setStartAudio(type: boolean){
    this.audio = type
  }
  get getStartAudio(){
    return this.audio
  }
}
