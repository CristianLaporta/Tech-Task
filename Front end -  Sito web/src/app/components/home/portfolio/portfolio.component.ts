import { Component } from '@angular/core';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolio: any = []
  constructor(private httpreq: HttprequestService) { }

  ngOnInit() {
    this.httpreq.getPortfolio().subscribe(data => {
      this.portfolio = data;
    });
  }

}
