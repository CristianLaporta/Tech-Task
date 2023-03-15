import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarFix: boolean = false;

  @HostListener('window:scroll', [])
  onScroll() {

    if (window.pageYOffset > 900) {
      this.navbarFix = true
    } else {
      this.navbarFix = false
    }
  }
}
