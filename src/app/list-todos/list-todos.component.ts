import { Component, OnInit } from "@angular/core";

export class Hotels {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"],
})
export class ListTodosComponent implements OnInit {
  hotels!: Hotels[];

  constructor() {}

  ngOnInit(): void {

  }
}
