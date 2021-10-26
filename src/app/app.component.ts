import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GuideLK';
  userAlive:boolean = true;

  public getUser(){
    if(localStorage.getItem('username')){
      this.userAlive = true;
    }
  }

 }
