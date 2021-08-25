import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DbKeysService } from './db-keys';
import { AlertifyService } from './Alertify';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private alertify: AlertifyService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const lang = localStorage.getItem(DbKeysService.LANGUAGE) || 'ar';
    req = req.clone({ headers: req.headers.set('Accept-Language', lang) });

    // check to see if there's internet
    if (!window.navigator.onLine) {
      // if there is no internet, throw a HttpErrorResponse error
      // since an error is thrown, the function will terminate here
      this.alertify.dismissAll();
      this.alertify.warning('بعض وظائف النظام لن تعمل بشكل جيد، فضلاً تحقق من أن جهازك متصل بشبكة الانترنت.');
    }

    return next.handle(req).pipe(
      catchError(error => {

        if (error instanceof HttpErrorResponse) {
          const applicationError = error.headers.get('Application-Error');

          // Error connection with the server
          if (error.status == 0) {
            this.alertify.dismissAll();
            this.alertify.error('فشل الاتصال بالخادم، في حالة استمرار الخطأ فضلاً تواصل بالدعم الفني');
          }

          // Error user need to activate his account
          if (error.status == 405) {
            return throwError(error);
          }

          // Model State Errors
          const serverError = error.error;
          let modelStateErrors = '';
          if (serverError && typeof serverError === 'object') {
            for (const key in serverError) {
              if (serverError[key] && (typeof serverError[key] === 'string' || serverError[key] instanceof String)) {
                modelStateErrors += '- ' + serverError[key] + '<br>';
              } else {
                for (const index in serverError[key]) {
                  modelStateErrors += '- ' + serverError[key][index] + '<br>';
                }
              }
            }
          }

          // unauthorized Errors
          if (error.status === 401 || error.status === 403) {
            if (error.error) {
              return throwError(`Unauthorized Code: ${error.status}<br>${error.error}`);
            } else {
              return throwError(error.statusText);
            }
          }

          return throwError(modelStateErrors || serverError || 'server Error');
        }
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
