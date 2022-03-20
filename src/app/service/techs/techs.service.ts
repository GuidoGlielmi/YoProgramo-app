import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class TechsService {
  constructor(private http: HttpClient) {}
  getTechs(): Observable<tech[]> {
    return this.http.get<tech[]>('http://localhost:8080/techs');
  }
}
export interface tech {
  id: String;
  name: String;
  techImg: String;
}
