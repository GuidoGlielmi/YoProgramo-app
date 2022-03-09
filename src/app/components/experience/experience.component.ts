import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
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
      description: 'Tremendos negreros',
    },
    {
      logoUrl: '../../assets/logos/APLogo.png',
      startDate: '11/2021',
      endDate: '05/2022',
      description: 'Aguante Cristina',
    },
    {
      logoUrl: '../../assets/logos/RRLogo.png',
      startDate: '09/2021',
      endDate: '01/2022',
      description: 'Tremendos negreros',
    },
  ];
  @ViewChild('exp') experienceNode: any;
  private screenHeight: number = 0;
  private screenWidth: number = 0;

  ngOnInit(): void {
    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
  onWheel(event: WheelEvent): void {
    if (event.deltaY > 0)
      this.experienceNode.nativeElement.scrollLeft += this.screenWidth * 0.39;
    else
      this.experienceNode.nativeElement.scrollLeft -= this.screenWidth * 0.39;
  }
}
export interface experience {
  logoUrl: string;
  startDate: string;
  endDate: string;
  description: string;
}
