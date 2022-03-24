import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { responseObject } from '../responses/response.service';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  constructor(private http: HttpClient) {}
  getExperiences(): Observable<experience[]> {
    return this.http.get<experience[]>('http://localhost:8080/experiences');
  }
  addExperience(experience: experience): Observable<responseObject> {
    return this.http.post<responseObject>(
      'http://localhost:8080/experiences',
      experience
    );
  }
  putExperience(experience: experience): Observable<responseObject> {
    return this.http.put<responseObject>(
      'http://localhost:8080/experiences',
      experience
    );
  }
  deleteExperience(experienceId: string): Observable<responseObject> {
    return this.http.delete<responseObject>(
      `http://localhost:8080/experiences/${experienceId}`
    );
  }
}
export interface experience {
  id: string;
  experienceImg: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  certificate: string;
}
