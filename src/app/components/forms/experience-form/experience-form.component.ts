import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  experience,
  ExperiencesService,
} from 'src/app/service/experiences/experiences.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css'],
})
export class ExperienceFormComponent implements OnInit {
  @Input()
  experience: experience = {
    id: '',
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    certificate: '',
    experienceImg: '',
  };
  @Input() isNewExperienceItem = false;
  @Output() onAddExperience = new EventEmitter<any>();
  @Output() onSaveExperience = new EventEmitter<any>();
  titleClicked: boolean = false;
  startDateClicked: boolean = false;
  endDateClicked: boolean = false;
  descriptionClicked: boolean = false;
  experienceImgClicked: boolean = false;
  certificateClicked: boolean = false;
  newExperience: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private experienceService: ExperiencesService
  ) {
    this.newExperience = this.formBuilder.group({
      id: '',
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      certificate: '',
      experienceImg: ['', [Validators.required]],
    });
  }
  addExperience() {
    this.experienceService
      .addExperience(this.newExperience.value)
      .subscribe((data) => {
        this.newExperience.get('id')?.setValue(data.data);
        this.onAddExperience.emit(this.newExperience.value);
      });
  }
  saveExperience() {
    this.experienceService
      .putExperience(this.newExperience.value)
      .subscribe(() => {
        this.onSaveExperience.emit(this.newExperience.value);
      });
  }
  ngOnInit(): void {
    this.newExperience.patchValue({
      id: this.experience.id,
      title: this.experience.title,
      description: this.experience.description,
      startDate: this.experience.startDate,
      endDate: this.experience.endDate,
      experienceImg: this.experience.experienceImg,
      certificate: this.experience.certificate,
    });
  }
  get title() {
    return this.newExperience.get('title');
  }
  get startDate() {
    return this.newExperience.get('school');
  }
  get endDate() {
    return this.newExperience.get('school');
  }
  get description() {
    return this.newExperience.get('school');
  }
  get experienceImg() {
    return this.newExperience.get('school');
  }
  get certificate() {
    return this.newExperience.get('school');
  }
}
