import {Component, OnInit} from "@angular/core";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit{
    constructor() { }

    ngOnInit() {
    }
    onTabChange(event: MatTabChangeEvent) {
    }
}