import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {LoadingProgressService} from "../services/loading-progress.service";

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor(private loadingProgressService: LoadingProgressService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(catchError((httpErrorResponse: HttpErrorResponse) => {
      this.loadingProgressService.isLoaded();
      alert(`Произошла ошибка ${httpErrorResponse.message}`);
      return of(httpErrorResponse);
    }));
  }
}
