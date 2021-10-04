import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMsg = 'An error occurred, please try again later'

  constructor() { }

  ngOnInit(): void {
  }

}
