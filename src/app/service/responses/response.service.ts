import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  private errorEvent = new BehaviorSubject<string>('');
  private sucessEvent = new BehaviorSubject<string>('');
  constructor() {}
  emitError(msg: string) {
    this.errorEvent.next(msg);
  }
  emitSuccess(msg: string) {
    this.sucessEvent.next(msg);
  }
  errorListener() {
    return this.errorEvent.asObservable();
  }
  successListener() {
    return this.sucessEvent.asObservable();
  }
}
export interface responseObject {
  msg: string;
  data: any;
}
