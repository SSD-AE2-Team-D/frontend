import {Component, OnInit} from '@angular/core';
import {take} from "rxjs/operators";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {Router} from '@angular/router';
import {LoginData} from "./login-data";
import {JwtClientService} from "../service/data/jwt-client.service";

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
                private jwtClientService: JwtClientService) {
        this.loginData = new LoginData();
    }

    ngOnInit(): void {
    }

    public checkLogin(): void {
        this.jwtClientService.generateToken(this.loginData).pipe(take(1))
            .subscribe(data => {
                this.jwtClientService.checkValidToken(data).pipe(take(1))
                    .subscribe(response => {
                        console.log(response);
                        if (response !== null && response != 'undefined') {
                            if (response === 'Success') {
                                this.invalidLogin = false;
                                localStorage.setItem('username', this.loginData.userName);
                                localStorage.setItem('access_token', data);
                                this.router.navigate(['welcome', this.loginData.userName])
                            } else {
                                this.invalidLogin = true;
                            }
                        } else {
                            this.invalidLogin = true;
                        }
                    }, error => {
                        this.invalidLogin = true;
                    })
            });
    }

}
