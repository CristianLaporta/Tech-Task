import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin.service';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-admin-portfolio',
  templateUrl: './admin-portfolio.component.html',
  styleUrls: ['./admin-portfolio.component.scss']
})
export class AdminPortfolioComponent {
  portfolio: any = [];
  linkmod!: string;
  titlemod!: string;
  textmod!: string;
  idmod!: number;
  modal: any;
  constructor(private httpreq: HttprequestService, private modalService: NgbModal, private adminservice: AdminService) { }

  ngOnInit() {
    this.httpreq.getPortfolio().subscribe(data => {
      this.portfolio = data;
    });
  }
  save() {
    this.adminservice.putModPortfolio(this.titlemod, this.linkmod, this.idmod, this.textmod).subscribe(data => {
      alert("modificato con successo!");
      this.ngOnInit();
      this.modal.close()

    });
  }
  openmodal(content: any, id: number, title: string, subtitle: string, img: string) {
    this.idmod = id
    this.linkmod = img;
    this.titlemod = title;
    this.textmod = subtitle
    this.modal = this.modalService.open(content);

  }
}
