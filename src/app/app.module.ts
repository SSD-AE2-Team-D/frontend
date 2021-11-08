import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClickOutsideModule} from "ng-click-outside";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AuthGuard} from "./login/auth-guard";
import {JwtClientService} from "./service/data/jwt-client.service";
import {AuthInterceptor, authInterceptorProviders} from "./util/auth.interceptor";
import {ErrorInterceptor} from "./util/error.interceptor";
import {UserService} from "./service/data/user.service";
import {AuthorityService} from "./service/data/authority.service";
import {ModuleService} from "./service/data/module.service";
import {PageService} from "./service/data/page.service";
import {PageTitleService} from "./core/page-title/page-title.service";
import {RolePermission} from "./shared/rolePermission/rolePermission";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {PageComponent} from "./config/page/page.component";
import {MainComponent} from "./main/main.component";
import {ModuleComponent} from "./config/module/module.component";
import {ModuleCreationComponent} from "./config/module/creation/module-creation.component";
import {ModuleDialogComponent, ModuleSearchComponent} from "./config/module/search/module-search.component";
import {AuditComponent} from "./shared/audit/audit.component";
import {ConfirmDialogComponent} from "./shared/confirm-dialog/confirm-dialog.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {MatStepperModule} from "@angular/material/stepper";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime-ex";
import {CommonModule} from "@angular/common";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";
import {AgGridModule} from "ag-grid-angular";
import {AddressBookComponent} from "./config/common/addressBook/address-book.component";
import {OrganizationComponent} from "./config/organization/organization.component";
import {OrganizationCreationComponent} from "./config/organization/creation/organization-creation.component";
import {OrganizationService} from "./service/data/organization.service";
import {SelectCheckAllComponent} from "./shared/select-check-all/select-check-all.component";
import {OrganizationDialogComponent, OrganizationSearchComponent} from "./config/organization/search/organization-search.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        PageComponent,
        MainComponent,
        ModuleComponent,
        OrganizationComponent,
        ModuleCreationComponent,
        ModuleSearchComponent,
        OrganizationCreationComponent,
        OrganizationSearchComponent,
        AuditComponent,
        AddressBookComponent,
        ConfirmDialogComponent,
        ModuleDialogComponent,
        OrganizationDialogComponent,
        SelectCheckAllComponent,
    ],
    entryComponents: [ConfirmDialogComponent,
        ModuleDialogComponent,
        OrganizationDialogComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ClickOutsideModule,
        HttpClientModule,
        FlexLayoutModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatSortModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        AgGridModule,
        AgGridModule.withComponents([]),
    ],
    providers: [AuthGuard,
        JwtClientService,
        authInterceptorProviders,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
        UserService,
        AuthorityService,
        ModuleService,
        PageService,
        OrganizationService,
        PageTitleService,
        RolePermission],
    exports: [FlexLayoutModule,],
    bootstrap: [AppComponent],
})
export class AppModule {
}
