import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { storage } from '../utils';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const isLoggedIn = true;
    const token = storage.getItem('App/session')?.token;
    const isApiUrl = request.url.startsWith(environment.apiUrl);

    console.log(token,isApiUrl);

    if (isLoggedIn && isApiUrl) {
      console.log('loc');
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
