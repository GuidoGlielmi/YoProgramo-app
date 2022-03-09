import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  public education: education[] = [
    {
      logoUrl: '../../assets/logos/TCDM-logo.jpg',
      title: 'Tremendos negreros',
      startDate: '09/2021',
      endDate: '01/2022',
    },
    {
      logoUrl: '../../assets/logos/fhya-logo.png',
      title: 'Tremendos negreros',
      startDate: '09/2021',
      endDate: '01/2022',
    },
    {
      logoUrl: '../../assets/logos/IPS-UNR-logo.png',
      title: 'Tremendos negreros',
      startDate: '09/2021',
      endDate: '01/2022',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
export interface education {
  logoUrl: string;
  title: string;
  startDate: string;
  endDate: string;
}
