import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
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
    let techImages = this.techImageNode.nativeElement;
    let scrollUnit = techImages.clientHeight;
    let currentValue = techImages.scrollLeft;
    let maxValue = techImages.scrollLeftMax;
    let totalWidth = techImages.scrollWidth;
    // let visibleWidth = techImages.offsetWidth;
    console.log(techImages);
    if (event.deltaY > 0) {
      if (maxValue - currentValue < scrollUnit) {
        techImages.style['scroll-behavior'] = 'auto';
        techImages.scrollLeft = currentValue - totalWidth / 2;
        techImages.style['scroll-behavior'] = 'smooth';
        techImages.scrollLeft = currentValue - totalWidth / 2 + scrollUnit;
      } else {
        techImages.scrollLeft += scrollUnit;
      }
    } else if (currentValue - scrollUnit < scrollUnit) {
      techImages.scrollLeft =
        totalWidth / 2 + Math.abs(currentValue - scrollUnit);
    } else {
      techImages.scrollLeft -= scrollUnit;
    }
  }

  ngOnInit(): void {}
}
