import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {LoadingProgressService} from "../services/loading-progress.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private downloadProgressService: LoadingProgressService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.downloadProgressService.isLoading();
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.downloadProgressService.isLoaded();
      }
      return event;
    }));
  }
}
