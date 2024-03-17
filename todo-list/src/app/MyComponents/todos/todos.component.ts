import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

// The below package is imported because local storage not working on browser
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';


declare var $: any; // Declare $ variable to access jQuery

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];


  // Updated constructor to inject platform ID and platform Browser for using local storage
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

    // this.todos = [];
    if (isPlatformBrowser(this.platformId)) {

      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    }



  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    $(document).ready(function () {
      $('#dataTable').DataTable();
    });
  }


  // Creating the event to work on todos.component.html
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  // Creating the event to work on todos.component.html
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  
  // Creating the event to work on on click strike event on todos.component.html
  toggleTodo(todo: Todo) {
    // console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
