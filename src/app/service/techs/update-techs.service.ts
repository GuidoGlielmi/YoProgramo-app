import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tech } from './techs.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateTechsService {
  private updatedTech = new BehaviorSubject<tech>({
    id: '',
    name: '',
    techImg: '',
  });
  constructor() {}
  updateTech(tech: tech) {
    this.updatedTech.next(tech);
  }
  watchTechUpdate() {
    return this.updatedTech.asObservable();
  }
}
