import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8080/login';
  loggedIn = new BehaviorSubject<boolean>(false);

  private currentUser: any = sessionStorage.getItem('accessToken');

  constructor(private http: HttpClient) {
    if (this.currentUser) this.loggedIn.next(true);
  }

  logIn(credentials: any): Observable<any> {
    return this.http
      .post(this.url, credentials, {
        observe: 'response',
      })
      .pipe(
        map((res) => {
          if (res.status === 200) {
            let token = res.headers.get('Authorization')!;
            this.loggedIn.next(true);
            this.currentUser = token;
            sessionStorage.setItem('accessToken', token!);
          }
          // return res.body;
        })
      );
  }
  logOut() {
    sessionStorage.removeItem('accessToken');
    this.loggedIn.next(false);
  }
  isLoggedListener() {
    return this.loggedIn.asObservable();
  }
  get isLoggedIn() {
    return this.loggedIn.value;
  }
  get accessToken() {
    return this.currentUser;
  }
}
