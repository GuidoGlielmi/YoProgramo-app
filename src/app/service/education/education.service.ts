import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { responseObject } from '../responses/response.service';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor(private http: HttpClient) {}
  getEducation(): Observable<education[]> {
    return this.http.get<education[]>('http://localhost:8080/education');
  }
  addEducation(education: education): Observable<responseObject> {
    return this.http.post<responseObject>(
      'http://localhost:8080/education',
      education
    );
  }
  putEducation(education: education): Observable<responseObject> {
    return this.http.put<responseObject>(
      'http://localhost:8080/education',
      education
    );
  }

  deleteEducation(educationId: string): Observable<responseObject> {
    return this.http.delete<responseObject>(
      `http://localhost:8080/education/${educationId}`
    );
  }
}
export interface education {
  id: string;
  school: string;
  degree: string;
  educationImg: string;
  startDate: string;
  endDate: string;
}
