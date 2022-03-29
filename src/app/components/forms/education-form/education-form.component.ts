import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  education,
  EducationService,
} from 'src/app/service/education/education.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css'],
})
export class EducationFormComponent implements OnInit {
  @Input()
  educationItem: education = {
    id: '',
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    educationImg: '',
  };
  @Input() isNewEducationItem = false;
  @Output() onAddEducation = new EventEmitter<any>();
  @Output() onSaveEducation = new EventEmitter<any>();
  schoolClicked: boolean = false;
  startDateClicked: boolean = false;
  endDateClicked: boolean = false;
  degreeClicked: boolean = false;
  educationImgClicked: boolean = false;
  newEducationItem: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private educationService: EducationService
  ) {
    this.newEducationItem = this.formBuilder.group({
      id: '',
      school: ['', [Validators.required]],
      degree: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      educationImg: ['', [Validators.required]],
    });
  }

  saveEducation() {
    this.educationService
      .putEducation(this.newEducationItem.value)
      .subscribe(() => {
        this.onSaveEducation.emit(this.newEducationItem.value);
      });
    // without subscription, it doesn't work
  }
  addEducation() {
    this.educationService
      .addEducation(this.newEducationItem.value)
      .subscribe((data: any) => {
        this.newEducationItem.get('id')?.setValue(data.data);
        this.onAddEducation.emit(this.newEducationItem.value);
        this.newEducationItem.reset();
      });
  }

  ngOnInit(): void {
    this.newEducationItem.patchValue({
      id: this.educationItem.id,
      school: this.educationItem.school,
      degree: this.educationItem.degree,
      startDate: this.educationItem.startDate,
      endDate: this.educationItem.endDate,
      educationImg: this.educationItem.educationImg,
    });
  }
  get school() {
    return this.newEducationItem.get('school');
  }
  get startDate() {
    return this.newEducationItem.get('startDate');
  }
  get endDate() {
    return this.newEducationItem.get('endDate');
  }
  get degree() {
    return this.newEducationItem.get('degree');
  }
  get educationImg() {
    return this.newEducationItem.get('educationImg');
  }
}
