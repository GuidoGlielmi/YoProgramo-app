import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('goUp', [
      state('unpressed', style({ transform: 'scale(1)' })),
      state('pressed', style({ transform: 'scale(0.95)' })),
      transition('unpressed <=> pressed', animate('40ms ease-out')),
    ]),
  ],
})
export class FooterComponent implements OnInit {
  goUpState = 'unpressed';
  justUpAndDown = 0;
  constructor() {}

  goUpPressed() {
    if (this.justUpAndDown < 2) {
      this.goUpState = this.goUpState === 'unpressed' ? 'pressed' : 'unpressed';
      this.justUpAndDown++;
    } else this.justUpAndDown = 0;
  }
  ngOnInit(): void {}
  /* scrollToElement($element: {
    scrollIntoView: (arg0: {
      behavior: string;
      block: string;
      inline: string;
    }) => void;
  }) {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  } */
}
