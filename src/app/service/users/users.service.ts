import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { responseObject } from '../responses/response.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getUser(): Observable<user[]> {
    return this.http.get<user[]>('http://localhost:8080/users');
  }
  postUser(newUser: user): Observable<responseObject> {
    return this.http.post<responseObject>(
      'http://localhost:8080/users',
      newUser
    );
  }
  putUser(newUser: user): Observable<responseObject> {
    return this.http.put<responseObject>(
      'http://localhost:8080/users',
      newUser
    );
  }
  deleteUser(userId: string): Observable<responseObject> {
    return this.http.delete<responseObject>(
      `http://localhost:8080/users${userId}`
    );
  }
}
export interface user {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  aboutMe: string;
  profileImg: string;
}
