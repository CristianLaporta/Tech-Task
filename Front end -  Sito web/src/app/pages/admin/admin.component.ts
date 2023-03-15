import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  pagina:string = "messages";
constructor(private admin:AdminService){}
ngDoCheck(){
this.pagina = this.admin.page;
}
}
