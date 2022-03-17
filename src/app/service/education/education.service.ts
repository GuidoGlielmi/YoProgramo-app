import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor(private http: HttpClient) {}
  getTechs(): Observable<education[]> {
    return this.http.get<education[]>('http://localhost:8080/education');
  }
}
export interface education {
  id: string;
  educationImg: string;
  startDate: string;
  endDate: string;
  school: string;
}
