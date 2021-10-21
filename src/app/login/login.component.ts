import {Component, OnInit} from '@angular/core';
import {mergeMap, take} from "rxjs/operators";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {Router} from '@angular/router';
import {LoginData} from "./login-data";
import {JwtClientService} from "../service/data/jwt-client.service";
import {UserService} from "../service/data/user.service";
import {AuthorityService} from "../service/data/authority.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginData: LoginData;
    errorMsg = 'Invalid Credentials'
    invalidLogin = false

    constructor(private snackBar: MatSnackBar,
                private router: Router,
                private jwtClientService: JwtClientService,
                private userService: UserService,
                private authorityService: AuthorityService) {
        this.loginData = new LoginData();
    }

    ngOnInit(): void {
    }

    public checkLogin(): void {
        this.jwtClientService.generateToken(this.loginData).pipe(take(1))
            .subscribe(data => {
                this.saveDataLocalStorage(data, this.loginData);
            });
    }

    public saveDataLocalStorage(token: any, userData: LoginData) {
        this.userService.getUserData(userData.userName).pipe(take(1))
            .subscribe(user => {
                if (user) {
                    this.authorityService.getUserAuthorities(userData.userName, user.organizationId).pipe(take(1))
                        .subscribe(authorities => {
                            if (authorities) {
                                localStorage.setItem('username', userData.userName);
                                localStorage.setItem('access_token', token);
                                localStorage.setItem('organizationId', JSON.stringify(user.organizationId));
                                localStorage.setItem('userAuthorityList', JSON.stringify(authorities));
                                this.router.navigate(['welcome', this.loginData.userName]);
                            }
                        })
                } else {
                    this.invalidLogin = true;
                    return;
                }
            })
    }
}