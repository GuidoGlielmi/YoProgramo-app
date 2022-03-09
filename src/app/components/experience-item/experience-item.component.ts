import { Component, Input, OnInit } from '@angular/core';
import { experience } from '../experience/experience.component';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css'],
})
export class ExperienceItemComponent implements OnInit {
  @Input()
  experience!: experience;
  @Input()
  index!: number;
  constructor() {}

  ngOnInit(): void {}
}
