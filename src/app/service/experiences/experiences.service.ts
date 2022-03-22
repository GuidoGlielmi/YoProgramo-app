import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  constructor(private http: HttpClient) {}
  getExperiences(): Observable<experience[]> {
    return this.http.get<experience[]>('http://localhost:8080/experiences');
  }
  addExperience(experience: experience): Observable<experience> {
    return this.http
      .post<experience>('http://localhost:8080/experience', experience)
      .pipe(/* retry(3), */ catchError(this.handleError));
  }
  putExperience(experience: experience): Observable<experience> {
    return this.http.put<experience>(
      'http://localhost:8080/experience',
      experience
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.status === 0) {
      // A client-side or network error occurred
      return throwError(() => new Error(error.error));
    } else {
      return throwError(() => new Error(`${error.status}: ${error.error}`));
    }
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
