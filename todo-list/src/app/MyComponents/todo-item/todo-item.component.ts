import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  // implementing event emitter to delete selcted element in todo
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter

  constructor(){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onClick(todo: Todo){
    // Calling the built in function to delete the selected todo content
    this.todoDelete.emit(todo);
    console.log("Onclick event is triggered");
  }

}
