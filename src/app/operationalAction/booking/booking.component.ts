import {Component, OnInit} from "@angular/core";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit{
    constructor() { }

    ngOnInit() {
    }
    onTabChange(event: MatTabChangeEvent) {
    }
}