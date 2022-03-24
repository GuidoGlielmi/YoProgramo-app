import { Component, OnInit } from '@angular/core';
import {
  experience,
  ExperiencesService,
} from 'src/app/service/experiences/experiences.service';
import { ResponseService } from 'src/app/service/responses/response.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  public experiences: experience[] = [];
  showNewForm = false;
  loggedIn = true;
  showForm: boolean[] = [];
  constructor(
    private experienceService: ExperiencesService,
    private responseService: ResponseService
  ) {
    for (const experience of this.experiences) {
      this.showForm.push(false);
    }
  }
  addExperience(newExperience: experience) {
    this.experiences.push(newExperience);
  }
  saveExperience(newExperience: { newExperience: experience; index: number }) {
    console.log(newExperience);

    this.experiences[newExperience.index] = newExperience.newExperience;
  }
  deleteExperience(i: number) {
    this.experienceService
      .deleteExperience(this.experiences[i].id)
      .subscribe(() => {
        this.experiences.splice(i, 1);
      });
  }
  ngOnInit(): void {
    this.experienceService
      .getExperiences()
      .subscribe((experiences: experience[]) => {
        this.experiences = experiences;
      });
  }
}
