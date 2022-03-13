import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  scrollBehavior = 'auto';
  techImages = [
    './assets/logos/angular.png',
    './assets/logos/css3.png',
    './assets/logos/expressjs.png',
    './assets/logos/html5.png',
    './assets/logos/java.png',
    './assets/logos/javascript.png',
    './assets/logos/mongodb.png',
    './assets/logos/nodejs.png',
    './assets/logos/postgresql.png',
    './assets/logos/react.png',
    './assets/logos/redux.png',
    './assets/logos/spring.png',
    './assets/logos/typescript.png',
  ];
  @ViewChild('techImagesNode') techImageNode: any;
  screenHeight: number = 0;
  screenWidth: number = 0;
  constructor() {
    this.onResize();
  }
  @HostListener('window:resize')
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
  onWheel(event: WheelEvent): void {
    let scrollUnit = this.techImageNode.nativeElement.clientHeight;
    let currentValue = this.techImageNode.nativeElement.scrollLeft;
    let maxValue = this.techImageNode.nativeElement.scrollLeftMax;
    let totalWidth = this.techImageNode.nativeElement.scrollWidth;
    // let visibleWidth = this.techImageNode.nativeElement.offsetWidth;
    if (event.deltaY > 0) {
      if (maxValue - currentValue < scrollUnit) {
        this.techImageNode.nativeElement.scrollLeft =
          currentValue - totalWidth / 2 + scrollUnit;
      } else {
        this.techImageNode.nativeElement.scrollLeft += this.screenWidth * 0.12;
      }
    } else if (currentValue - scrollUnit < scrollUnit) {
      this.techImageNode.nativeElement.scrollLeft =
        totalWidth / 2 + Math.abs(currentValue - scrollUnit);
    } else {
      this.techImageNode.nativeElement.scrollLeft -= this.screenWidth * 0.12;
    }
  }

  ngOnInit(): void {}
}
