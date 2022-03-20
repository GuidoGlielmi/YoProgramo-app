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
  education: education[] = [];
  constructor(private educationService: EducationService) {}
  ngOnInit(): void {
    try {
      this.educationService.getEducation().subscribe({
        next: (education: education[]) => {
          this.education = education;
        },
        error: (error) => console.log(error),
        complete: () => console.log('complete'),
      });
    } catch (err) {
      console.log(err);
    }
  }
}
