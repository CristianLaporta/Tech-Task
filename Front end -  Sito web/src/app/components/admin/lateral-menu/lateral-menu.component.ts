import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.scss']
})
export class LateralMenuComponent {
constructor(private admin : AdminService){}
editPage(page:string){
  this.admin.page = page;
}
}
