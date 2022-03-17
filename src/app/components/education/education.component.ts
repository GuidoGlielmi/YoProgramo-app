import { Component, OnInit } from '@angular/core';
import {
  education,
  EducationService,
} from 'src/app/service/education/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: education[] = [
    {
      id: '',
      educationImg: '',
      school: '',
      startDate: '',
      endDate: '',
    },
  ];
  constructor(private educationService: EducationService) {}
  ngOnInit(): void {
    try {
      this.educationService.getTechs().subscribe((education: education[]) => {
        console.log(education);
        this.education = education;
      });
    } catch (err) {
      console.log(err);
    }
  }
}
