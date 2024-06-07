import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      //any alteration in httpRequest can be done here
      const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y";
      return next.handle(httpRequest.clone({ setHeaders: { authorization: `Bearer ${jwt}`  } })).pipe(
        tap({
          next: (event) => {
            if (event instanceof HttpResponse) {
              if(event.status == 401) {
                alert('Unauthorized access!')
              }
            }
            return event;
          },
          error: (error) => {
            if(error.status === 401) {
              alert('Unauthorized access!')
            }
            else if(error.status === 404) {
              alert('Page Not Found!')
            }
          }
        }));

  }
}