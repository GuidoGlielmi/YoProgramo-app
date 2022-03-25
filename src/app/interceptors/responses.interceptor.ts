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

@Injectable({ providedIn: 'root' })
export class ResponsesInterceptor implements HttpInterceptor {
  constructor(private responseService: ResponseService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next
        .handle(req)
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
    if (error.status === 0) {
      this.responseService.emitError(`An error ocurred: ${error.message}`);
      return throwError(() => new Error(error.message));
    } else {
      this.responseService.emitError(
        `An error ocurred: ${error.status} ${error.error.error}`
      );
      return throwError(
        () => new Error(`${error.status}: ${error.error.error}`)
      );
    }
  }
}
