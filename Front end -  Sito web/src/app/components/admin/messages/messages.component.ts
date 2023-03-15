import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  message:any = [];
  constructor(private adminservice:AdminService){}
  ngOnInit() {
    this.adminservice.getMessage().subscribe(data => {
      this.message = data;
    });
}
}
