import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
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
  constructor(
    private educationService: EducationService,
    private authService: AuthService
  ) {
    authService.isLoggedListener().subscribe((isLogged) => {
      this.loggedIn = isLogged;
      this.showForm = [];
      this.showNewForm = false;
    });
  }
  ngOnInit(): void {
    // instanciating EducationService
    this.educationService.getEducation().subscribe((education: education[]) => {
      this.education = education;
    });
  }
  addEducation(newEducation: education) {
    this.education.push(newEducation);
    this.education.sort((a, b) => a.degree.localeCompare(b.degree));
    this.showForm = [];
  }
  saveEducation(newEducation: education, i: number) {
    this.education[i] = newEducation;
  }
  deleteEducation(i: number) {
    this.educationService
      .deleteEducation(this.education[i].id)
      .subscribe(() => this.education.splice(i, 1));
  }
}
