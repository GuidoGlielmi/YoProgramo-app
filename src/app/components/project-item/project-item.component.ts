import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/service/projects/projects.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TechsService, tech } from 'src/app/service/techs/techs.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent implements OnInit {
  @Input()
  project!: any;
  @Input()
  index!: number;

  loggedIn: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
