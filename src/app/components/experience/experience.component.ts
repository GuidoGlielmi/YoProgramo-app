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
  vwh = 'vw';

  rightStyle: any = {
    'min-height': '50' + this.vwh,
    display: 'flex',
    'justify-content': 'flex-end',
    'align-items': 'flex-start',
    width: '100%',
    'background-image':
      'linear-gradient(190deg,rgba(228, 228, 228, 0.1) 70.2%,rgba(19, 12, 39, 0.8) 70%)',
    color: '#313131',
    'text-shadow': '0px 0px 1px #131313',
    padding: '10vh 10vw',
  };
  leftStyle: any = {
    'min-height': '50' + this.vwh,
    display: 'flex',
    'justify-content': 'flex-end',
    'align-items': 'flex-start',
    width: '100%',
    'background-image':
      'linear-gradient(170deg,rgba(19, 12, 39, 0.8) 70%,rgba(228, 228, 228, 0.1) 70.2%)',
    'text-shadow': '0 0 1px #eeeeee',
    padding: '10vh 10vw',
  };
  firstRightStyle: any = {
    'min-height': '60' + this.vwh,
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'flex-start',
    'align-items': 'flex-end',
    width: '100%',
    padding: '15vh 10vw 10vh',
    'background-image':
      'linear-gradient(190deg,rgba(226, 226, 226, 0.1) 70%,rgba(19, 12, 39, 0.8) 70.2%)',
    'text-shadow': '0 0 1px #131313',
  };
  constructor(private experienceService: ExperiencesService) {
    this.onResize();
  }

  ngOnInit(): void {
    try {
      this.experienceService
        .getExperiences()
        .subscribe((experiences: experience[]) => {
          console.log(experiences);
          this.experiences = experiences;
          this.experiences.push(experiences[0]);
          this.experiences.push(experiences[0]);
          this.experiences.push(experiences[0]);
          this.experiences.push(experiences[0]);
        });
    } catch (err) {
      console.log(err);
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerHeight > window.innerWidth) {
      this.vwh = 'vh';
    } else {
      this.vwh = 'vw';
    }
  }
}
