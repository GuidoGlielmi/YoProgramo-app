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
    return this.http.get<education[]>(
      'https://yoprogramo-server.herokuapp.com/education'
    );
  }
  addEducation(education: education): Observable<responseObject> {
    return this.http.post<responseObject>(
      'https://yoprogramo-server.herokuapp.com/education',
      education
    );
  }
  putEducation(education: education): Observable<responseObject> {
    return this.http.put<responseObject>(
      'https://yoprogramo-server.herokuapp.com/education',
      education
    );
  }

  deleteEducation(educationId: string): Observable<responseObject> {
    return this.http.delete<responseObject>(
      `https://yoprogramo-server.herokuapp.com/education/${educationId}`
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
