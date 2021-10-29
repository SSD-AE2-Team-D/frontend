import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Authority} from "../../config/authority/authority";
import {HttpService} from "../../core/utill/http.service";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthorityService {
    constructor(private http: HttpClient) {
    }

    getUserAuthorities(userName: string, organizationId: number, token: any): Observable<Authority[]> {
        let params = new HttpParams();
        params = params.set('userName', userName);
        params = params.set('organizationId', organizationId);
        const headers = new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization': "Bearer " + token
        });
        return this.http.get(HttpService.SERVICE_PATH + 'authorities/getUserAuthorities', {
            params: params, headers
        }).pipe(map(response => <Authority[]>response));
    }
}