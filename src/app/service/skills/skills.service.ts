import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}
  getSkills(): Observable<skills[]> {
    return this.http.get<skills[]>('http://localhost:8080/skills');
  }
}
export interface skills {
  id: String;
  name: String;
  type: String;
  abilityPercentage: number;
}
