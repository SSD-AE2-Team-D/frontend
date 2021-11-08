import {Component, OnInit} from "@angular/core";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
    selector: 'app-organization',
    templateUrl: './organization.component.html',
    styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
    ngOnInit() {

    }

    onTabChange(event: MatTabChangeEvent) {
    }
}