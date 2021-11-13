import {Component, OnInit} from "@angular/core";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
})
export class CountryComponent implements OnInit{
    constructor() { }

    ngOnInit() {
    }
    onTabChange(event: MatTabChangeEvent) {
    }
}