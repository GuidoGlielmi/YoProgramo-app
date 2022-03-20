import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tech } from '../techs/techs.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}
  getProjects(): Observable<project[]> {
    return this.http.get<project[]>('http://localhost:8080/projects');
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
