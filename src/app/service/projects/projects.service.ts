import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { tech } from '../techs/techs.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/projects');
  }
  addProject(project: any): Observable<any> {
    return this.http
      .post<any>('http://localhost:8080/projects', project)
      .pipe(/* retry(3), */ catchError(this.handleError));
  }
  putProject(project: any): Observable<any> {
    return this.http.put<any>('http://localhost:8080/projects', project);
  }
  addUrlToProject(projectUrl: any): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/projects/url',
      projectUrl
    );
  }
  deleteUrlFromProject(urlId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/projects/url/${urlId}`);
  }
  addTechToProject(techId: string, projectId: string): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/projects/${projectId}/tech/${techId}`,
      ''
    );
  }
  deleteTechFromProject(techId: string, projectId: string): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/projects/${projectId}/tech/${techId}`
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
export interface project {
  id: string;
  title: string;
  projectImg: string;
  description: string;
  techs: tech[];
  urls: projectUrls[];
}
export interface projectUrls {
  id: String;
  url: String;
  name: String;
  projectId: String;
}
