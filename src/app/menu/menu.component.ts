import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('menuTrigger', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('200ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ]),
  ]

})
export class MenuComponent implements OnInit {

  showDiv:boolean=false
  showDiv2:boolean=false
  //isUserLoggedIn:boolean=false

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn()
  }

  // showDivFunction(){
  //   this.showDiv = !this.showDiv
  //   this.showDiv2 = false
  //
  // }
  //
  showDivFunction2(){
    this.showDiv2 = !this.showDiv2;
    // this.showDiv = false
  
  }
  // hideDiv(){
  //   this.showDiv2 = false
  //   this.showDiv = false
  // }

  isShown() {
    this.showDiv2 = false
  }

}
