import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css'],
})
export class ExperienceItemComponent implements OnInit {
  @Input() experience: any = {};
  @Input() index: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
