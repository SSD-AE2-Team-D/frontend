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
            authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWNoaWdlZXRoIiwiZXhwIjoxNjM1MzA2NzY4LCJpYXQiOjE2MzUyNzA3Njh9.suXPj4Y_bnZYN27GLH7Im5f-81UUlB6zTByulw8bU_4';
        }
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }

}