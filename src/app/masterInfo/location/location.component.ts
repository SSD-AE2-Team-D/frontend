import {Component, OnInit} from "@angular/core";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
})
export class LocationComponent implements OnInit{
    constructor() { }

    ngOnInit() {
    }
    onTabChange(event: MatTabChangeEvent) {
    }
}