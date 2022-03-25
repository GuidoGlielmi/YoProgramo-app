import { Component, OnInit } from '@angular/core';
import {
  experience,
  ExperiencesService,
} from 'src/app/service/experiences/experiences.service';
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
  constructor(private experienceService: ExperiencesService) {}
  addExperience(newExperience: experience) {
    this.experiences.push(newExperience);
    this.experiences.sort((a, b) => a.title.localeCompare(b.title));
  }
  saveExperience(newExperience: { newExperience: experience; index: number }) {
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
