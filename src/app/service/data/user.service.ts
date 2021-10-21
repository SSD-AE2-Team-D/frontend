import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Module} from "../../config/module/module";
import {HttpPath} from "../../core/utill/http-path";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../../config/user/user";
import {Authority} from "../../config/authority/authority";

let HTTPOptions: Object = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    responseType: 'text'
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    getUserData(userName: string): Observable<User> {
        let params = new HttpParams();
        params = params.set('userName', userName);
        return this.http.get(HttpPath.SERVICE_PATH + 'users/getUserData', {
            params: params
        }).pipe(map(response => <User>response));
    }

}