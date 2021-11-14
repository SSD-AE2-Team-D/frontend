import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {MasterStatus} from "../../util/master-status";
import {HttpService} from "../../core/utill/http.service";
import {catchError, map, retry} from "rxjs/operators";
import {Hotel} from "../../operationalInfo/hotel/hotel";
import {HotelVo} from "../../operationalInfo/hotel/hotel-vo";
import {HotelCategoryType} from "../../util/hotel-category-type";
import {StarGrading} from "../../util/star-grading";
import {RoomFeatureType} from "../../util/room-feature-type";

@Injectable({
    providedIn: 'root'
})
export class HotelService {
    constructor(private http: HttpClient) {
    }

    httpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    postHotel(hotel: Hotel): Observable<Hotel> {
        return this.http.post<Hotel>(HttpService.SERVICE_PATH + 'hotels/', JSON.stringify(hotel), this.httpHeader)
            .pipe(
                retry(1),
                catchError(this.processError)
            )
    }

    putHotel(hotel: Hotel): Observable<Hotel> {
        return this.http.put<Hotel>(HttpService.SERVICE_PATH + 'hotels/', JSON.stringify(hotel), this.httpHeader)
            .pipe(
                retry(1),
                catchError(this.processError)
            )
    }

    deleteHotel(hotel: Hotel) {
        return this.http.delete<Hotel>(HttpService.SERVICE_PATH + 'hotels/' + hotel.hotelId, this.httpHeader)
            .pipe(
                retry(1),
                catchError(this.processError)
            )
    }

    hotelSearch(hotelVo: HotelVo): Observable<Hotel[]> {
        return this.http.post<Hotel[]>(HttpService.SERVICE_PATH + 'hotels/hotelSearch', JSON.stringify(hotelVo), this.httpHeader)
            .pipe(
                retry(1),
                catchError(this.processError)
            )
    }

    getHotelCategoryTypeList(): Observable<HotelCategoryType[]> {
        return this.http.get(HttpService.SERVICE_PATH + 'hotels/getHotelCategoryTypeList', this.httpHeader)
            .pipe(map(response => <HotelCategoryType[]>response));
    }

    getStarGradingList(): Observable<StarGrading[]> {
        return this.http.get(HttpService.SERVICE_PATH + 'hotels/getStarGradingList', this.httpHeader)
            .pipe(map(response => <StarGrading[]>response));
    }

    getRoomFeatureTypeList(): Observable<RoomFeatureType[]> {
        return this.http.get(HttpService.SERVICE_PATH + 'hotels/getRoomFeatureTypeList', this.httpHeader)
            .pipe(map(response => <RoomFeatureType[]>response));
    }

    getMasterDataStatus(filter: string): Observable<MasterStatus[]> {
        let params = new HttpParams();
        params = params.set('filter', filter);
        return this.http.get(HttpService.SERVICE_PATH + 'hotels/getMasterStatusList', {
            params: params
        }).pipe(map(response => <MasterStatus[]>response));
    }

    processError(err: any) {
        let message = '';
        if (err.error instanceof ErrorEvent) {
            message = err.error.message;
        } else {
            message = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }
        console.log(message);
        return throwError(message);
    }


}