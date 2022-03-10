import { Component, Input, OnInit } from '@angular/core';
import { project } from '../projects/projects.component';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent implements OnInit {
  @Input()
  projectItem!: project;
  @Input()
  index!: number;
  constructor() {}

  ngOnInit(): void {}
}
