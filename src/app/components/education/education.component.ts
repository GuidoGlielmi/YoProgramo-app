import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: education[] = [
    {
      logoUrl: '../../assets/logos/fhya-logo.png',
      school: 'Escuela de Música - Facultad de Humanidades y Artes',
      title: 'Sound and Recording Technician',
      startDate: '09/2016',
      endDate: '11/2019',
    },
    {
      logoUrl: '../../assets/logos/IPS-UNR-logo.png',
      school: 'Instituto Politécnico Superior',
      title: 'Technician in Electronic Systems',
      startDate: '04/2021',
      endDate: 'Current',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
export interface education {
  logoUrl: string;
  school: string;
  title: string;
  startDate: string;
  endDate: string;
}
