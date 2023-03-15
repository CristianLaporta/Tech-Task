import { Component } from '@angular/core';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-admin-slide',
  templateUrl: './admin-slide.component.html',
  styleUrls: ['./admin-slide.component.scss']
})
export class AdminSlideComponent {
  slide:any = [];
constructor(private httpreq:HttprequestService){}
ngOnInit(){
  this.httpreq.getSlideHome().subscribe(data => {
    this.slide = data;
  });
}
}
