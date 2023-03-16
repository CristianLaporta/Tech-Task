import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements AfterViewInit{
observer:any;
animations:boolean = true;
digitalLearning:number = 0;
form:string = "0";
peap:string ="0";
  @ViewChild('container') elementoHTML!: ElementRef;
  ngAfterViewInit() {
    this.observer.observe(this.elementoHTML.nativeElement);
  }
  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && this.animations == true) {
          // chiamata alla funzione da attivare
       this.animation()
        }
      });
    });
  }

  animation(){
this.animations =false;
const container: any = document.querySelector('.animation');
container.classList.add('slide-in-bottom');
const container2: any = document.querySelector('.animation2');
container2.classList.add('slide-in-bottom');
const container3: any = document.querySelector('.animation3');
container3.classList.add('slide-in-bottom');
setTimeout(() => {
  this.digitalLearning = 1;
  this.form = "100.000"
  this.peap =  "150.000"
  setTimeout(() => {
    this.digitalLearning = 4;
    this.form =  "150.300"
    this.peap =  "230.300"
  }, 200);
  setTimeout(() => {
    this.digitalLearning =8;
    this.form =  "200.000"
    this.peap =  "250.030"
  }, 350);
  setTimeout(() => {
    this.digitalLearning = 12;
    this.form =  "206.700"
    this.peap =  "340.000"
  }, 450);
  setTimeout(() => {
    this.digitalLearning = 20;
    this.form =  "304.000"
    this.peap =  "350.400"
  }, 550);
  setTimeout(() => {
    this.digitalLearning = 22;
    this.form =  "400.040"
    this.peap =  "400.000"
  }, 650);
  setTimeout(() => {
    this.digitalLearning = 23;
    this.form =  "500.000"
    this.peap =  "430.040"
  }, 750);
  setTimeout(() => {
    this.digitalLearning = 24;
    this.form = "900.000"
    this.peap = "450.000"
  }, 850);

}, 1000);
}
}
