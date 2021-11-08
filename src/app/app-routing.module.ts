import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./login/auth-guard";
import {LogoutComponent} from "./logout/logout.component";
import {PageComponent} from "./config/page/page.component";
import {MainComponent} from "./main/main.component";
import {ModuleComponent} from "./config/module/module.component";
import {OrganizationComponent} from "./config/organization/organization.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},

    {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
    {
        path: 'main', component: MainComponent, canActivate: [AuthGuard],
        children: [{path: 'page', component: PageComponent, canActivate: [AuthGuard]},
            {path: 'module', component: ModuleComponent, canActivate: [AuthGuard]},
            {path: 'organization', component: OrganizationComponent, canActivate: [AuthGuard]},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
