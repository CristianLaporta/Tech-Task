import { Component } from '@angular/core';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  name: string = "";
  email: string = "";
  message: string = "";

  constructor(private httprequest: HttprequestService) { }

  send() {
    if (this.email.length != 0 && this.name.length != 0 && this.message.length != 0) {
      this.httprequest.postContacts(this.message, this.name, this.email).subscribe(response => {
        alert('messaggio inviato con successo!')
        this.message = "";
        this.name = "";
        this.email = "";
      });
    } else {
      alert('ci sono dei campi vuoti!')
    }
  }
}
