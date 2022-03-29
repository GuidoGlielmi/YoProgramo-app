import { Component, HostListener, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-progress-ring',
  templateUrl: './progress-ring.component.html',
  styleUrls: ['./progress-ring.component.css'],
})
export class ProgressRingComponent implements OnInit {
  @Input() color = 'rgb(90, 136, 126)';
  @Input() percentage = 100;
  @Input() radius = 7;
  @Input() strokeWidth = this.radius / 3;
  vwh = '';
  cxy = 0;
  diameter = 0;
  circumference = 0;
  screenHeight = 0;
  screenWidth = 0;
  offset = 0;
  constructor() {
    this.onResize();
  }
  @HostListener('window:resize')
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 650) {
      this.vwh = 'vw';
      this.circumference = this.screenWidth * (this.radius / 100) * 2 * Math.PI;
    } else {
      this.vwh = 'vh';
      this.circumference =
        this.screenHeight * (this.radius / 100) * 2 * Math.PI;
    }
    this.diameter = 2 * this.radius + this.strokeWidth;
    this.cxy = this.radius + this.strokeWidth / 2;
    this.offset = (this.circumference * (100 - this.percentage)) / 100;
  }
  ngOnInit(): void {
    if (this.screenWidth > 650) {
      this.vwh = 'vw';
      this.circumference = this.screenWidth * (this.radius / 100) * 2 * Math.PI;
    } else {
      this.vwh = 'vh';
      this.circumference =
        this.screenHeight * (this.radius / 100) * 2 * Math.PI;
    }
    this.diameter = 2 * this.radius + this.strokeWidth;
    this.cxy = this.radius + this.strokeWidth / 2;
    this.offset = (this.circumference * (100 - this.percentage)) / 100;
  }
  ngOnChanges() {
    this.offset = (this.circumference * (100 - this.percentage)) / 100;
    /*
    --------- Angular animation way: ---------

    public animateOffset: any;
    constructor(private animBuilder: AnimationBuilder) {}
    @ViewChild('circle') circle: any;
    onChange(): void {
      const setOffset = this.animBuilder.build([
        animate(
          `0.5s ease`,
          style({
            'stroke-dashoffset': `${
              (this.circumference * (100 - this.percentage)) / 100
            }px`,
          })
        ),
      ]);
      this.animateOffset = setOffset.create(this.circle.nativeElement);
      this.animateOffset.play();
    }
    */
  }
}
