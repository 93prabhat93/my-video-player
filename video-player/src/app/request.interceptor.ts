import { Injectable } from "@angular/core";
import { ApiRequestService } from './api-request.service';   // our custom service, see below
import {HttpRequest , HttpHandler , HttpInterceptor , HttpEvent  } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(public apiRequestService: ApiRequestService) {}

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'source': 'web',
        "Content-Type": "application/json"
      }
    });
    return next.handle(request);
  }
}