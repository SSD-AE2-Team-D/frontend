import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginData} from "../../login/login-data";
import {HttpPath} from "../../core/utill/http-path";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

let HTTPOptions: Object = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    responseType: 'text'
}

@Injectable({providedIn: 'root'})
export class JwtClientService {
    constructor(private router: Router,
                private http: HttpClient) {
    }

    public generateToken(loginData: LoginData): Observable<any> {
        return this.http.post<any>(HttpPath.SERVICE_PATH + 'logins/authenticate', loginData, HTTPOptions)
            .pipe(map(response => <any>response));
    }

    public checkValidToken(token: any) {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set("Authorization", tokenStr);
        return this.http.get(HttpPath.SERVICE_PATH + 'logins/checkValidToken', {headers, responseType: 'text' as 'json'})
            .pipe(map(response => <any>response));
    }

}
