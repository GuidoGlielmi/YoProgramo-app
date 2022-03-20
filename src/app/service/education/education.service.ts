import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor(private http: HttpClient) {}
  getEducation(): Observable<education[]> {
    return this.http
      .get<education[]>('http://localhost:8080/education')
      .pipe(catchError(this.handleError));
  }
  putEducation(education: education): Observable<education> {
    return this.http.put<education>(
      'http://localhost:8080/education',
      education
    );
  }

  addEducation(education: education): Observable<education> {
    return this.http
      .post<education>('http://localhost:8080/education', education)
      .pipe(/* retry(3), */ catchError(this.handleError));
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
export interface education {
  id: string;
  school: string;
  degree: string;
  educationImg: string;
  startDate: string;
  endDate: string;
}
