import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Authority} from "../../config/authority/authority";
import {HttpPath} from "../../core/utill/http-path";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthorityService {
    constructor(private http: HttpClient) {
    }

    getUserAuthorities(userName: string, organizationId: number): Observable<Authority[]> {
        let params = new HttpParams();
        params = params.set('userName', userName);
        params = params.set('organizationId', organizationId);
        return this.http.get(HttpPath.SERVICE_PATH + 'authorities/getUserAuthorities', {
            params: params
        }).pipe(map(response => <Authority[]>response));
    }
}