import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.scss']
})
export class AdminChatComponent {
 chatbot:any = [];
 domandamod!:string;
 rispostamod!:string;
  modal: any;
  constructor(private adminservice:AdminService, private modalService: NgbModal ){}
  ngOnInit() {
    this.adminservice.getChatbot().subscribe(data => {
      this.chatbot = data;
    });
}
elimina(id:number){
  this.adminservice.deleteResponseChat(id).subscribe(data => {
    alert("risposta eliminata con successo!")
    this.ngOnInit()
  });
}
save(){
 if(this.domandamod.length !=0 && this.rispostamod.length != 0){
  this.adminservice.postQuestChat(this.domandamod,this.rispostamod).subscribe(data => {
    alert("risposta creata con successo!")
    this.ngOnInit()
    this.modal.close()
  });
 }else{
  alert("campi mancanti")
 }
}
openmodal(content: any) {
  this.modal = this.modalService.open(content);
}
}
