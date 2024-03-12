import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {

  // Creating a decorator input to add item in the todo list
  @Input()
  todo: Todo = new Todo;

  constructor(){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
