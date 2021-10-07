import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hotels } from "src/app/list-todos/list-todos.component";

@Injectable({
  providedIn: "root",
})
export class HotelDataService {
  constructor(private http: HttpClient) {}

  retrieveAllHotels(username: any) {
    return this.http.get<Hotels[]>(
      `http://localhost:8080/users/${username}/hotels`
    );
  }
}
