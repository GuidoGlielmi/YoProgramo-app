import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  public experiences: experience[] = [
    {
      logoUrl: '../../assets/logos/RRLogo.png',
      startDate: '09/2021',
      endDate: '01/2022',
      title: 'Tuvieja',
      description: 'Tremendos negreros',
    },
    {
      logoUrl: '../../assets/logos/APLogo.png',
      title: 'Tuvieja',
      startDate: '11/2021',
      endDate: '05/2022',
      description: 'Aguante Cristina',
    },
    {
      logoUrl: '../../assets/logos/TCDM-logo.jpg',
      title: 'Taller Corazón de Manzana',
      startDate: '09/2021',
      endDate: '01/2022',
      description: 'Casitas',
    },
  ];

  ngOnInit(): void {}
}
export interface experience {
  logoUrl: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
}
