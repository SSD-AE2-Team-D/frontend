import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpPath} from "../../core/utill/http-path";
import {map} from "rxjs/operators";
import {Module} from "../../config/module/module";

let HTTPOptions: Object = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    responseType: 'text'
}

@Injectable({
    providedIn: 'root'
})
export class ModuleService{
    constructor(private http: HttpClient) {
    }

    getUserModules(userName: string, organizationId: number): Observable<Module[]> {
        let params = new HttpParams();
        params = params.set('userName', userName);
        params = params.set('organizationId', organizationId.toString());
        return this.http.get(HttpPath.SERVICE_PATH + 'modules/getUserModules', {
            params: params
        }).pipe(map(response => <Module[]>response));
    }
}