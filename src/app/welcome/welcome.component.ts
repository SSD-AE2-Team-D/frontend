import {Component, OnInit, ViewChild} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  isShowing: boolean;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  callMethods() {
    this.toggleSidenav();
  }

 }
