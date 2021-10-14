import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  name = "";
  welcomeMessageFromService: string = "";

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params["name"];
  }

  getWelcomeMessage() {

    // console.log("get welcome message");
  }

  handleSuccessfulResponse(response: any) {
    // console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any) {
    // console.log(response.message);
    this.welcomeMessageFromService = error.error.message;
  }
}
