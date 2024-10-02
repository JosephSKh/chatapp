import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageComponent, FormsModule, NgFor],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  list: any = [];

  myUsername: string = '';
  myMessage: string = '';

  constructor(private chatService:ChatService){}

  ngOnInit() {
    this.chatService.getMessages().subscribe(
      (response) => {
        this.list = response.map((singleMessage: any) => {
          return {
            username: singleMessage.name,
            body: singleMessage.body
          };
        });
      }
    )
  }

  sendMessage(username: string, body: string) {
    if (username && body) {
      this.list.push({
        username: username,
        body: body
      });
      this.myMessage = '';
    }
  }

}
