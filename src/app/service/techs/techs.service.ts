import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tech } from 'src/app/components/personal-info/personal-info.component';

@Injectable({
  providedIn: 'root',
})
export class TechsService {
  constructor(private http: HttpClient) {}
  getTechs(): Observable<any> {
    return this.http.get<tech[]>('http://localhost:8080/techs');
  }
}
