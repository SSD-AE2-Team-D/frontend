import {Component, OnInit} from "@angular/core";
import {PageTitleService} from "../../core/page-title/page-title.service";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html',
})
export class RoleComponent implements OnInit{
    constructor(private pageTitleService: PageTitleService) { }

    ngOnInit() {
    }
    onTabChange(event: MatTabChangeEvent) {
    }
}