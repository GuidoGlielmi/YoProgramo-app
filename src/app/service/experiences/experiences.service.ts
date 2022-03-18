import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  constructor(private http: HttpClient) {}
  getExperiences(): Observable<experience[]> {
    return this.http.get<experience[]>('http://localhost:8080/experiences');
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
