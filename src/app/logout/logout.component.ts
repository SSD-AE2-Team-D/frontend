import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {JwtClientService} from "../service/data/jwt-client.service";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
       this.logout();
    }

    logout() {
        window.sessionStorage.clear();
        window.sessionStorage.removeItem('username');
        window.sessionStorage.removeItem('userId');
        window.sessionStorage.removeItem('access_token');
        window.sessionStorage.removeItem('refresh_token');
        this.router.navigate(['login'])
    }

}
