import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { responseObject } from '../responses/response.service';

@Injectable({
  providedIn: 'root',
})
export class TechsService {
  private updatedTech = new BehaviorSubject<tech | tech[]>({
    id: '',
    name: '',
    techImg: '',
  });
  constructor(private http: HttpClient) {}

  updateTech(tech: tech | tech[]) {
    this.updatedTech.next(tech);
  }
  watchTechUpdate() {
    return this.updatedTech.asObservable();
  }
  getTechs(): Observable<tech[]> {
    return this.http.get<tech[]>(
      'https://yoprogramo-server.herokuapp.com/techs'
    );
  }
  postTech(newTech: tech): Observable<responseObject> {
    return this.http.post<responseObject>(
      'https://yoprogramo-server.herokuapp.com/techs',
      newTech
    );
  }
  putTech(newTech: tech): Observable<responseObject> {
    return this.http.put<responseObject>(
      'https://yoprogramo-server.herokuapp.com/techs',
      newTech
    );
  }
  deleteTech(techId: string): Observable<responseObject> {
    return this.http.delete<responseObject>(
      `https://yoprogramo-server.herokuapp.com/techs/${techId}`
    );
  }
}
export interface tech {
  id: string;
  name: string;
  techImg: string;
}
