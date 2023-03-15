import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  timer: boolean = false;
  timer2: boolean = false;
  chat: boolean = false;
  chatmsg: boolean = false;
  timerstop!: any;
  message!: string;
  messages: any = []
  constructor(private httprequest: HttprequestService) { }
  ngOnInit() {
    setTimeout(() => {
      this.timer = true
    }, 5000);
    setTimeout(() => {
      this.timer2 = true
    }, 10000);
  }
  openClosechat() {
    this.chat = !this.chat
    this.timer2 = false
    setTimeout(() => {
      const el = document.querySelector('#chats')!;
      el.scrollTop = el.scrollHeight
    }, 1000);
  }
  send() {
    if (this.message.length != 0) {
      let message = { mess: this.message, type: "send" };
      this.messages.push(message)
      const el = document.querySelector('#chats')!;
      el.scrollTop = el.scrollHeight
      this.chatmsg = true
      this.httprequest.postMessageChat(this.message).subscribe(response => {
        this.message = "";
        let risposta = response;
        this.messages.push(risposta)
        this.chatmsg = false
        setTimeout(() => {
          el.scrollTop = el.scrollHeight

        }, 500);
      });
    }
  }
}
