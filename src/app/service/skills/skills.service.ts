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
    return this.http.get<skills[]>(
      'https://yoprogramo-server.herokuapp.com/skills'
    );
  }
  postSkill(newSkill: skills): Observable<responseObject> {
    return this.http.post<responseObject>(
      'https://yoprogramo-server.herokuapp.com/skills',
      newSkill
    );
  }
  putSkill(newSkill: skills): Observable<responseObject> {
    return this.http.put<responseObject>(
      'https://yoprogramo-server.herokuapp.com/skills',
      newSkill
    );
  }
  deleteSkill(skillId: string): Observable<responseObject> {
    return this.http.delete<responseObject>(
      `https://yoprogramo-server.herokuapp.com/skills/${skillId}`
    );
  }
}
export interface skills {
  id: string;
  name: string;
  type: string;
  abilityPercentage: number;
}
