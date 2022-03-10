import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: project[] = [
    {
      company: 'Radium Rocket',
      logoUrl: '../../assets/logos/RRLogo.png',
      description: 'Fictional company development',
      title: 'Radium Rocket - MindSET',
      startDate: '09/2016',
      endDate: '11/2019',
    },
    {
      company: 'Radium Rocket',
      logoUrl: '../../assets/logos/APLogo.png',
      description: 'Portfolio development',
      title: 'Techinician in Electronic Systems',
      startDate: '04/2021',
      endDate: 'Current',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
export interface project {
  logoUrl: string;
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}
