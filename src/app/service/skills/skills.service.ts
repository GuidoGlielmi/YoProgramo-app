import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { responseObject } from '../responses/response.service';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}
  getSkills(): Observable<skills[]> {
    return this.http.get<skills[]>('http://localhost:8080/skills');
  }
  postSkill(newSkill: skills): Observable<responseObject> {
    return this.http.post<responseObject>(
      'http://localhost:8080/skills',
      newSkill
    );
  }
  putSkill(newSkill: skills): Observable<responseObject> {
    return this.http.put<responseObject>(
      'http://localhost:8080/skills',
      newSkill
    );
  }
  deleteSkill(skillId: string): Observable<responseObject> {
    return this.http.delete<responseObject>(
      `http://localhost:8080/skills/${skillId}`
    );
  }
}
export interface skills {
  id: String;
  name: String;
  type: String;
  abilityPercentage: number;
}
