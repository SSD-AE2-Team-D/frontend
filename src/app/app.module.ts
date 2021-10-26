import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClickOutsideModule} from "ng-click-outside";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtClientService} from "./service/data/jwt-client.service";
import {UserService} from "./service/data/user.service";
import {AuthorityService} from "./service/data/authority.service";
import {AuthGuard} from "./login/auth-guard";
import {AuthInterceptor} from "./util/auth.interceptor";
import {MatSliderModule} from "@angular/material/slider";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {ModuleService} from "./service/data/module.service";
import {PageService} from "./service/data/page.service";
import {PageTitleService} from "./core/page-title/page-title.service";
import {PageComponent} from "./config/page/page.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import {MainComponent} from './main/main.component';
import {ModuleComponent} from "./config/module/module.component";
import {ModuleCreationComponent} from "./config/module/module-creation.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        PageComponent,
        MainComponent,
        ModuleComponent,
        ModuleCreationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        ClickOutsideModule,
        HttpClientModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatSliderModule,
        MatSnackBarModule,
        MatCardModule,
        MatTabsModule,
        MatDividerModule,
        MatMenuModule,
        MatDialogModule],
    providers: [AuthGuard,
        JwtClientService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        UserService,
        AuthorityService,
        ModuleService,
        PageService,
        PageTitleService],
    exports: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
