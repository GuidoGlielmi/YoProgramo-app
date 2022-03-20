import { Component, HostListener, OnInit } from '@angular/core';
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

  constructor(private experienceService: ExperiencesService) {}

  ngOnInit(): void {
    try {
      this.experienceService
        .getExperiences()
        .subscribe((experiences: experience[]) => {
          this.experiences = experiences;
          this.experiences.push(experiences[0]);
        });
    } catch (err) {
      console.log(err);
    }
  }

  /*  @HostListener('window:resize')
  onResize() {
    if (window.innerHeight > window.innerWidth) {
      this.vwh = 'vh';
    } else {
      this.vwh = 'vw';
    }
  } */
}
