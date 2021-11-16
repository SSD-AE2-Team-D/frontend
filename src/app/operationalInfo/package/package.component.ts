import {Component, OnInit} from "@angular/core";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
    selector: 'app-package',
    templateUrl: './package.component.html',
})
export class PackageComponent implements OnInit{
    constructor() { }

    ngOnInit() {
    }
    onTabChange(event: MatTabChangeEvent) {
    }
}