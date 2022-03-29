import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ResponseService } from '../service/responses/response.service';
import { AuthService } from '../service/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class ResponsesInterceptor implements HttpInterceptor {
  constructor(
    private responseService: ResponseService,
    private authService: AuthService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.authService.accessToken;
    if (req.method !== 'GET') {
      let reqWithToken = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
      });
      return next
        .handle(reqWithToken)
        .pipe(
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              console.log(event.body.data);
              this.responseService.emitSuccess(event.body.msg);
            }
            return event;
          })
        )
        .pipe(catchError((res: HttpErrorResponse) => this.handleError(res)));
    }
    return next
      .handle(req)
      .pipe(catchError((res: HttpErrorResponse) => this.handleError(res)));
  }
  handleError(error: HttpErrorResponse) {
    console.log(error);

    if (error.status === 0) {
      this.responseService.emitError(`An error ocurred: ${error.message}`);
      return throwError(() => new Error(error.message));
    } else {
      this.responseService.emitError(
        `An error ocurred: ${error.status} ${error.error.message}`
      );
      return throwError(
        () => new Error(`${error.status}: ${error.error.message}`)
      );
    }
  }
}
