import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { Todo } from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Output()
  toggleTodo: EventEmitter<Todo> = new EventEmitter();
  @Output()
  remove : EventEmitter<number> = new EventEmitter();

  constructor(private todoDataService: TodoDataService)
   { }

  
  ngOnInit() {
  }

    

  // Service is now available as this.todoDataService
  toggleTodoComplete(todo: Todo) {
    this.toggleTodo.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo.id);
  }
 

 
}
