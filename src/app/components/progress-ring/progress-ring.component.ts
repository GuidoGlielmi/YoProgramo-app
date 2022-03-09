import {
  animate,
  AnimationBuilder,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-progress-ring',
  templateUrl: './progress-ring.component.html',
  styleUrls: ['./progress-ring.component.css'],
  animations: [
    /* state() function defines different states to call at the end of each transition. This function takes two arguments: a unique name like open or closed and a style() function.
    Use the style() function to define a set of styles to associate with a given state name.
    With properties with dashes, use single quotes
    */
    /* trigger('setOffset', [
      state(
        'oldOffset',
        style({
          'stroke-dashoffset':
            (this.circumference * (100 - this.percentage)) / 100,
        })
      ),
      transition('oldOffset => newOffset'),
      [animate('0.5s')],
    ]), */
    // animation triggers go here
    // Each contains a key used to invoke the trigger and a set of states and transitions.
  ],
})
export class ProgressRingComponent implements OnInit {
  @Input() color = 'black';
  @Input() percentage = 100;
  @Input() radius = 10;
  @Input() strokeWidth = this.radius / 10;
  cxy = 0;
  diameter = 0;
  circumference = 0;
  screenHeight = 0;
  screenWidth = 0;
  offset = 0;
  animateOffset: any;
  constructor() {
    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
  ngOnInit(): void {
    this.circumference = this.screenWidth * (this.radius / 100) * 2 * Math.PI;
    this.diameter = 2 * (this.radius + this.strokeWidth / 2);
    this.cxy = this.radius + this.strokeWidth / 2;
  }
  onChange(): void {
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
