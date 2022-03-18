import { Component, Input, OnInit } from '@angular/core';
import { project } from 'src/app/service/projects/projects.service';

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
