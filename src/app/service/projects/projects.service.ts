import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { responseObject } from '../responses/response.service';
import { tech } from '../techs/techs.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}
  getProjects(): Observable<project[]> {
    return this.http.get<project[]>(
      'https://yoprogramo-server.herokuapp.com/projects'
    );
  }
  addProject(project: project): Observable<responseObject> {
    return this.http.post<responseObject>(
      'https://yoprogramo-server.herokuapp.com/projects',
      project
    );
  }
  putProject(project: project): Observable<responseObject> {
    return this.http.put<responseObject>(
      'https://yoprogramo-server.herokuapp.com/projects',
      project
    );
  }
  deleteProject(projectId: string): Observable<responseObject> {
    return this.http.delete<responseObject>(
      `https://yoprogramo-server.herokuapp.com/projects/${projectId}`
    );
  }
  addUrlToProject(projectUrl: projectUrls): Observable<responseObject> {
    return this.http.post<responseObject>(
      'https://yoprogramo-server.herokuapp.com/projects/url',
      projectUrl
    );
  }
  deleteUrlFromProject(urlId: string): Observable<responseObject> {
    return this.http.delete<responseObject>(
      `https://yoprogramo-server.herokuapp.com/projects/url/${urlId}`
    );
  }
  addTechToProject(
    techId: string,
    projectId: string
  ): Observable<responseObject> {
    return this.http.post<responseObject>(
      `https://yoprogramo-server.herokuapp.com/projects/${projectId}/tech/${techId}`,
      ''
    );
  }
  deleteTechFromProject(
    techId: string,
    projectId: string
  ): Observable<responseObject> {
    return this.http.delete<responseObject>(
      `https://yoprogramo-server.herokuapp.com/projects/${projectId}/tech/${techId}`
    );
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
  id: string;
  url: string;
  name: string;
  projectId: string;
}
