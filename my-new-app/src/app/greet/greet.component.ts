import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.css'
})
export class GreetComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  name: string = "Deepak Gangwani";
  greet(): void {
    alert("Hello " + this.name);
  };

}
