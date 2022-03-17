import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { user } from 'src/app/app.component';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get<user[]>('http://localhost:8080/users');
  }
}
