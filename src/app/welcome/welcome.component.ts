import {Component, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ModuleService} from "../service/data/module.service";
import {take} from "rxjs/operators";
import {Module} from "../config/module/module";
import {PageService} from "../service/data/page.service";
import {Page} from "../config/page/page";

@Component({
    selector: "app-welcome",
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
    @ViewChild('sidenav') sidenav: any;
    isShowing: boolean;
    moduleList: Module[] = [];
    pageList: Page[] = [];

    constructor(
        private route: ActivatedRoute,
        private moduleService: ModuleService,
        private pageService: PageService) {
    }

    ngOnInit(): void {
        this.userModules();
    }

    toggleSidenav() {
        this.isShowing = !this.isShowing;
    }

    callMethods() {
        this.toggleSidenav();
    }

    public userModules() {
        const username = localStorage.getItem('username');
        if (username) {
            this.moduleService.getUserModules(username, Number(localStorage.getItem('organizationId')))
                .pipe((take(1))).subscribe(modules => {
                if (modules && modules.length > 0) {
                    modules.forEach(mod => {
                        console.log(mod);
                        this.moduleList.push(mod);
                    })
                }

            })
        }
    }

    public getPages(moduleId: number) {
        this.pageList = [];
        this.pageService.getPagesByModule(moduleId).pipe(take(1))
            .subscribe(pages => {
                if (pages && pages.length > 0) {
                    pages.forEach(page => {
                        this.pageList.push(page);
                    })
                    this.toggleSidenav();
                }
            })


    }

}
