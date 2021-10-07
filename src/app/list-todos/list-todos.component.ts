import { Component, OnInit } from "@angular/core";
import { HotelDataService } from "../service/data/hotel-data.service";

export class Hotels {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"],
})
export class ListTodosComponent implements OnInit {
  hotels!: Hotels[];

  constructor(private hotelService: HotelDataService) {}

  ngOnInit(): void {
    this.hotelService.retrieveAllHotels("abdul").subscribe((response) => {
      console.log(response);
      this.hotels = response;
    });
  }
}
