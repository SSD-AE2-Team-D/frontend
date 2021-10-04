import { Component, OnInit } from '@angular/core';


export class Todos {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
    
  ){

}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todos(1, 'Learn to dance', false, new Date()),
    new Todos(2, 'Learn to drink', true, new Date()),
    new Todos(3, 'Learn to work', false, new Date()),
    new Todos(4, 'Learn to walk', true, new Date()),
    // {id: 1, description: 'learn to dance'},
    // {id: 2, description: 'learn to drink'},
    // {id: 3, description: 'learn to work'},
  ]
  // todo = {
  //   id: 1,
  //   description: 'Learn to dance'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
