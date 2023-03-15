import { Component } from '@angular/core';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-admin-partners',
  templateUrl: './admin-partners.component.html',
  styleUrls: ['./admin-partners.component.scss']
})
export class AdminPartnersComponent {
partners:any = []
constructor(private httpreq: HttprequestService) { }
ngOnInit(){
  this.httpreq.getCarouselCompanies().subscribe(data => {
    this.partners = data;

  });
}

}
