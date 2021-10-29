import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginData} from "../../login/login-data";
import {HttpService} from "../../core/utill/http.service";
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
        return this.http.post<any>(HttpService.SERVICE_PATH + 'logins/authenticate', loginData, HTTPOptions)
            .pipe(map(response => <any>response));
    }

    public getToken() {
        return localStorage.getItem('access_token');
    }

    get isLoggedIn(): boolean {
        let authToken = localStorage.getItem('access_token');
        return (authToken !== null);
    }

    public doLogout() {
        let removeToken = localStorage.removeItem('access_token');
        if (removeToken == null) {
            this.router.navigate(['logout']);
        }
    }

}
