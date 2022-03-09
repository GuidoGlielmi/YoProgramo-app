import { Component, Input, OnInit } from '@angular/core';
import { education } from '../education/education.component';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css'],
})
export class EducationItemComponent implements OnInit {
  @Input()
  educationItem!: education;
  @Input()
  index!: number;
  constructor() {}

  ngOnInit(): void {}
}
