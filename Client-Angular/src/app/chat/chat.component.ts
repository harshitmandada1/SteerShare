import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
 user:String;
 room:String;
 messageText:String;
 messageArray:Array<{user:String,message:String}> = [];
 constructor(private _chatService:ChatService){
     this._chatService.newUserJoined()
     .subscribe(data=> this.messageArray.push(data));


     this._chatService.userLeftRoom()
     .subscribe(data=>this.messageArray.push(data));

     this._chatService.newMessageReceived()
     .subscribe(data=>this.messageArray.push(data));
 }

  ngOnInit() {
    // this.chatservice
    //   .getMessages()
    //   .subscribe((message: string) => {
    //     this.messages.push(message);
    //   });
  }



  join(){
    this._chatService.joinRoom({user:this.user, room:this.room});
}

leave(){
    this._chatService.leaveRoom({user:this.user, room:this.room});
}

sendMessage()
{
    this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
}



  

    
  
  



}
