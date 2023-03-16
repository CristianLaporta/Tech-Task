import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolio: any = []
  observer: any;
  animations: boolean = true
  @ViewChild('container') elementoHTML!: ElementRef;
  constructor(private httpreq: HttprequestService) { }
  ngOnInit() {
    this.httpreq.getPortfolio().subscribe(data => {
      this.portfolio = data;
      setTimeout(() => {
        this.observer.observe(this.elementoHTML.nativeElement);
      }, 500);
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && this.animations == true) {
            // chiamata alla funzione da attivare
            const container: any = document.querySelector('.anim');
            container.classList.add('slide-in-bottom');
          }
        });
      });
    });
  }


}
