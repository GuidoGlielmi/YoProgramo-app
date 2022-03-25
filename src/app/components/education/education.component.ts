import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  education,
  EducationService,
} from 'src/app/service/education/education.service';
import { ResponseService } from 'src/app/service/responses/response.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: education[] = [];
  loggedIn = true;
  showForm: boolean[] = [];
  showNewForm = false;
  constructor(private educationService: EducationService) {}
  ngOnInit(): void {
    // instanciating EducationService
    this.educationService.getEducation().subscribe((education: education[]) => {
      this.education = education;
    });
  }
  addEducation(newEducation: education) {
    this.education.push(newEducation);
    this.education.sort((a, b) => a.degree.localeCompare(b.degree));
  }
  saveEducation(newEducation: { newEducation: education; index: number }) {
    this.education[newEducation.index] = newEducation.newEducation;
  }
  deleteEducation(i: number) {
    this.educationService
      .deleteEducation(this.education[i].id)
      .subscribe(() => this.education.splice(i, 1));
  }
}
