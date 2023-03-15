import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-carousel-companies',
  templateUrl: './carousel-companies.component.html',
  styleUrls: ['./carousel-companies.component.scss']
})
export class CarouselCompaniesComponent {
  partner: any = []
  constructor(private httpreq: HttprequestService) { }

  ngOnInit() {
    this.httpreq.getCarouselCompanies().subscribe(data => {
      this.partner = data;
      setInterval(() => {
        const partners: any = document.querySelector('.partner');
        partners.classList.add('transition');
        setTimeout(() => {
          this.rebuildArray()
        }, 1200);
      }, 2400);
    });
  }

  rebuildArray() {
    const firstItem = this.partner.shift();
    this.partner.push(firstItem);
    const partners: any = document.querySelector('.partner');
    partners.classList.remove('transition');
  }

}

