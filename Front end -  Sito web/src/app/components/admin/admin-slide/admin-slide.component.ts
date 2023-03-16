import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin.service';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-admin-slide',
  templateUrl: './admin-slide.component.html',
  styleUrls: ['./admin-slide.component.scss']
})
export class AdminSlideComponent {
  controlRed = true
  linkmod: string = "";
  textmod: string = "";
  btntextmod: string = "";
  btnmod: string = "";
  id!: number;
  slide: { text: string, textbtn: string, img: string, html: HTMLElement, id: number, linkbtn: string }[] = [];
  modal: any;
  constructor(private httpreq: HttprequestService, private modalService: NgbModal, private admin: AdminService) { }
  ngOnInit() {
    this.httpreq.getSlideHome().subscribe(data => {
      this.slide = data;
    });
  }
  openModal(content: any, link: string, text: string, id: number, btnmod: string, btntextmod: string) {
    this.id = id;
    this.linkmod = link;
    this.textmod = text
    this.btnmod = btnmod;
    this.btntextmod = btntextmod;

    if (this.textmod.includes('<span class="txtred">')) {
      this.textmod = this.textmod.replace('<span class="txtred">', '*red');
    }
    if (this.textmod.includes('</span>')) {
      this.textmod = this.textmod.replace('</span>', '*/red');
    }
    if (this.textmod.includes('<br>')) {
      this.textmod = this.textmod.replace('<br>', '*altrariga');
    }
    this.modal = this.modalService.open(content);

  }
  addRed() {
    this.textmod = this.textmod + "*red  Scrivi qui dentro  */red"
  }
  addSpace() {
    this.textmod = this.textmod + " *altrariga"
  }
  save() {
    this.admin.putModSlide(this.textmod, this.linkmod, this.id, this.btnmod, this.btntextmod).subscribe(response => {

      if (response == "ok") {
        alert("slide modificata con successo!");
        this.modal.close()
        this.ngOnInit();
      } else if (response == "error") {
        alert("impossibile salvare, errore sconosciuto!")
      }
    });
  }
  erase(id: number) {
    this.admin.deleteSlide(id).subscribe(data => {
      if (data == "ok") {
        alert("slide eliminata correttamente!");
        this.ngOnInit();
      }else{
        console.log(data)
      }
    });
  }
  crea(){
    this.admin.getCreateSlide().subscribe(data => {
      this.ngOnInit();
    });
  }
}
