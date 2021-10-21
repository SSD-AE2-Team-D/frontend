import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClickOutsideModule} from "ng-click-outside";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.component";
import {ListTodosComponent} from "./list-todos/list-todos.component";
import {MenuComponent} from "./menu/menu.component";
import {FooterComponent} from "./footer/footer.component";
import {LogoutComponent} from "./logout/logout.component";
import {TeamComponent} from "./team/team.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {JwtClientService} from "./service/data/jwt-client.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {UserService} from "./service/data/user.service";
import {AuthorityService} from "./service/data/authority.service";
import {AuthGuard} from "./login/auth-guard";
import {AuthInterceptor} from "./util/auth.interceptor";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        LoginComponent,
        ErrorComponent,
        ListTodosComponent,
        MenuComponent,
        FooterComponent,
        LogoutComponent,
        TeamComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        ClickOutsideModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
    ],
    providers: [AuthGuard,
        JwtClientService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        UserService,
        AuthorityService],
    exports: [MatIconModule,
        MatToolbarModule,
        MatFormFieldModule],
    bootstrap: [AppComponent],
})
export class AppModule {
}
