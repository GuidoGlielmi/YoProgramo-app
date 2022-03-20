import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<user[]> {
    return this.http.get<user[]>('http://localhost:8080/users');
  }
}
export interface user {
  id: String;
  firstName: string;
  lastName: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  aboutMe: string;
  profileImg: String;
}
