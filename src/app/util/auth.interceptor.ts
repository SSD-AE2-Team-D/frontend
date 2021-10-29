import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {JwtClientService} from "../service/data/jwt-client.service";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {catchError, filter, switchMap, take} from "rxjs/operators";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private authService: JwtClientService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.authService.getToken();
        if (token != null) {
            authReq = this.addTokenHeader(req, token);
        }

        return next.handle(authReq).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && !authReq.url.includes('logins/authenticate') && error.status === 401) {
                return this.handle401Error(authReq, next);
            }

            return throwError(error);
        }));
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        return this.refreshTokenSubject.pipe(
            filter(token => token !== null),
            take(1),
            switchMap((token) => next.handle(this.addTokenHeader(request, token)))
        );
    }


    private addTokenHeader(request: HttpRequest<any>, token: string) {
        return request.clone({headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});

    }

}