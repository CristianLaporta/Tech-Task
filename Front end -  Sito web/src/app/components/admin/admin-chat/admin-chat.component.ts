import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.scss']
})
export class AdminChatComponent {
 chatbot:any = [];
  constructor(private adminservice:AdminService){}
  ngOnInit() {
    this.adminservice.getChatbot().subscribe(data => {
      this.chatbot = data;
    });
}
}
