import {Component, OnInit} from "@angular/core";
import {PageTitleService} from "../../core/page-title/page-title.service";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
    selector: 'page-com',
    templateUrl: './page.component.html',
})
export class PageComponent implements OnInit{

    constructor(private pageTitleService: PageTitleService) { }

    ngOnInit() {
        this.pageTitleService.setTitle('Page');
    }
    onTabChange(event: MatTabChangeEvent) {
    }
}