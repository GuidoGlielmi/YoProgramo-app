import { Component, Input, OnInit } from '@angular/core';
import {
  experience,
  ExperiencesService,
} from 'src/app/service/experiences/experiences.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  loggedIn: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
