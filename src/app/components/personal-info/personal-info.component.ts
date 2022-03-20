import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { tech, TechsService } from 'src/app/service/techs/techs.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  @Input() aboutMe: String = '';
  techs: tech[] = [{ id: '', name: '', techImg: '' }];
  @ViewChild('techImagesNode') techImageNode: any;
  screenHeight: number = 0;
  screenWidth: number = 0;
  constructor(private techService: TechsService) {
    this.onResize();
  }

  ngOnInit(): void {
    try {
      this.techService.getTechs().subscribe((techs: tech[]) => {
        this.techs = techs;
      });
    } catch (err) {
      console.log(err);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
  onWheel(event: WheelEvent): void {
    let techImages = this.techImageNode.nativeElement;
    let scrollUnit = techImages.clientHeight;
    let currentValue = techImages.scrollLeft;
    let maxValue = techImages.scrollLeftMax;
    let totalWidth = techImages.scrollWidth;
    // let visibleWidth = techImages.offsetWidth;
    if (event.deltaY > 0) {
      if (maxValue - currentValue < scrollUnit) {
        techImages.style['scroll-behavior'] = 'auto';
        techImages.scrollLeft = currentValue - totalWidth / 2;
        techImages.style['scroll-behavior'] = 'smooth';
        techImages.scrollLeft = currentValue - totalWidth / 2 + scrollUnit;
      } else {
        techImages.scrollLeft += scrollUnit;
      }
    } else if (currentValue - scrollUnit < scrollUnit) {
      techImages.style['scroll-behavior'] = 'auto';
      techImages.scrollLeft = currentValue - totalWidth / 2;
      techImages.style['scroll-behavior'] = 'smooth';
      techImages.scrollLeft =
        totalWidth / 2 + Math.abs(currentValue - scrollUnit);
    } else {
      techImages.scrollLeft -= scrollUnit;
    }
  }
}
