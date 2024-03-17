import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {

  title: string='';
  desc: string='';

  showError: boolean = false;
  // implementing event emitter to delete selected element in todo
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter

  constructor() {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmit() {

    if (this.title.trim() === '' || this.desc.trim() === '' ) {
      this.showError = true;
    } else {
      this.showError = false;
      const todo = {
        sno: 8,
        title: this.title,
        desc: this.desc,
        active: true
      }
      this.todoAdd.emit(todo);
      // Reset the input field
      this.title = '';
      // Reset the input field
      this.desc = '';
    }

  }


}
