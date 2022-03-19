import { Component, Input, OnInit } from '@angular/core';
import { education } from 'src/app/service/education/education.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  schoolClicked: boolean = false;
  startDateClicked: boolean = false;
  endDateClicked: boolean = false;
  degreeClicked: boolean = false;
  educationImgClicked: boolean = false;
  registered: boolean = false;
  newEducationItem: FormGroup;
  constructor(private formBuilder: FormBuilder) {
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
    console.log(this.newEducationItem);
    console.log(this.newEducationItem.touched);
    console.log(this.educationImg?.status);
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
