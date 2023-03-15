import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss']
})
export class CarouselHomeComponent {
  @ViewChild(NgbCarousel) carousel!: NgbCarousel;
  slides: { text: string, textbtn: string, img: string, html: HTMLElement }[] = [];
  fadeout = false;
  timerInterval = 8000;
  private timer: any;

  constructor(private httpreq: HttprequestService) { }

  ngOnInit() {
    this.startTimer();
    this.httpreq.getSlideHome().subscribe(data => {
      this.slides = data;
    });

  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  // Avvia il timer per lo scorrimento automatico delle slide
  startTimer() {
    this.timer = setInterval(() => {
      if (this.slides.length != 0) {
        this.slideBtn('next')
      }
    }, this.timerInterval);
  }

  // Gestisce il clic su un pulsante di scorrimento
  async slideBtn(direction: 'prev' | 'next') {
    clearInterval(this.timer);
    this.fadeout = true;
    await new Promise(resolve => setTimeout(resolve, 800));
    if (direction == 'prev') {
      this.carousel.prev();
    } else if (direction == 'next') {
      this.carousel.next();
    }
    await new Promise(resolve => setTimeout(resolve, 700));
    this.fadeout = false;
    this.startTimer();
  }

  // Gestisce il cambio manuale di slide tramite le frecce della tastiera o la navigazione manuale
  onManualControl() {
    clearInterval(this.timer);
    setTimeout(() => {
      this.startTimer();
    }, this.timerInterval);
  }
}
