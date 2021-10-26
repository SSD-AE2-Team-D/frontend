import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {JwtClientService} from "../service/data/jwt-client.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: JwtClientService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authToken = this.authService.getToken();
        if(!authToken){
            authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWNoaWdlZXRoIiwiZXhwIjoxNjM1MjYwNTcxLCJpYXQiOjE2MzUyMjQ1NzF9.1joiq8NqDrwGsyDb2Rp7Ukwv15kLt2-l3oKBoy2Mfms';
        }
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }

}