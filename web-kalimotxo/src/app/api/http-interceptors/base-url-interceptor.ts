import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!_.includes(req.url, 'http')) {
      const newReq = req.clone({ url: `${environment.api_url}${req.url}` });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
