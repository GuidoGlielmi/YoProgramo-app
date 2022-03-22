import { Component, Input, OnInit } from '@angular/core';
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
  @Input()
  index!: number;
  schoolClicked: boolean = false;
  startDateClicked: boolean = false;
  endDateClicked: boolean = false;
  degreeClicked: boolean = false;
  educationImgClicked: boolean = false;
  registered: boolean = false;
  newEducationItem: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private educationService: EducationService
  ) {
    this.newEducationItem = this.formBuilder.group({
      id: ['', [Validators.required]],
      school: ['', [Validators.required]],
      degree: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      educationImg: ['', [Validators.required]],
    });
  }

  saveEducation() {
    this.educationService.putEducation(this.newEducationItem.value).subscribe({
      next: (asd) => console.log('asd'),
      error: (error) => console.log(error),
    });
    // without subscription, it doesn't work
    /*   console.log(this.newEducationItem.value);
    console.log(this.newEducationItem.touched);
    console.log(this.educationImg?.status); */
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
