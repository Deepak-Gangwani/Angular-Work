import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';

  // created a constructor in the class to auto run the settimeout feature 
  constructor() {
    // setTimeout(() => {
    //   this.title = "Changed title";
    // }, 2000);
  }
}
