import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {HttpService} from "../../core/utill/http.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../../config/user/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    getUserData(userName: string): Observable<User> {
        let params = new HttpParams();
        params = params.set('userName', userName);
        return this.http.get(HttpService.SERVICE_PATH + 'users/getUserData', {
            params: params
        }).pipe(map(response => <User>response));
    }

}