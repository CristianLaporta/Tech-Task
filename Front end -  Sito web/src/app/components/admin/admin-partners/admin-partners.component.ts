import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin.service';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-admin-partners',
  templateUrl: './admin-partners.component.html',
  styleUrls: ['./admin-partners.component.scss']
})
export class AdminPartnersComponent {
partners:any = []
linkmod!:string;
  modal: any;
constructor(private httpreq: HttprequestService, private adminservice:AdminService,private modalService: NgbModal ) { }
ngOnInit(){
  this.httpreq.getCarouselCompanies().subscribe(data => {
    this.partners = data;

  });
}
elimina(id:number){
  this.adminservice.deletePartners(id).subscribe(data => {
    alert("partners eliminato con successo!")
    this.ngOnInit()
  });
}
crea(){
  this.adminservice.postSlidePartnersCreate(this.linkmod).subscribe(data => {
    alert("Partners creato con successo!")
    this.ngOnInit();
    this.modal.close()
  });
}
openmodal(content:any){
  this.modal = this.modalService.open(content);

}
}
