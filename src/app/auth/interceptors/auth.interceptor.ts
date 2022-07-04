import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var headers = request.headers;
    headers = headers.set("Authorization", localStorage.getItem("jwt") || "");
    var httpRequest = request.clone({headers: headers});
    console.log(httpRequest)
    return next.handle(httpRequest);
  }
}
