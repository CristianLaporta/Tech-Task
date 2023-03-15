import { Component } from '@angular/core';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-admin-portfolio',
  templateUrl: './admin-portfolio.component.html',
  styleUrls: ['./admin-portfolio.component.scss']
})
export class AdminPortfolioComponent {
portfolio:any = [];
constructor(private httpreq: HttprequestService) { }

ngOnInit() {
  this.httpreq.getPortfolio().subscribe(data => {
    this.portfolio = data;
  });
}
}
