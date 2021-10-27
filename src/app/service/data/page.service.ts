import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpService} from "../../core/utill/http.service";
import {map} from "rxjs/operators";
import {Page} from "../../config/page/page";

@Injectable({
    providedIn: 'root'
})
export class PageService {
    constructor(private http: HttpClient) {
    }

    getPagesByModule(moduleId: number): Observable<Page[]> {
        let params = new HttpParams();
        params = params.set('moduleId', moduleId.toString());
        return this.http.get(HttpService.SERVICE_PATH + 'pages/getPagesByModule', {
            params: params
        }).pipe(map(response => <Page[]>response));
    }
}