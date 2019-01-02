import { Injectable,Output,EventEmitter } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

 
  
  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  todos: Todo[] = [];

  @Output()
  listChanged: EventEmitter<null> = new EventEmitter();
  constructor(private api: ApiService) {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    this.listChanged.emit(null);
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): Observable<Todo> {
    this.listChanged.emit(null);
    return this.api.deleteTodoById(id);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    this.listChanged.emit(null);
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  

  getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

  // Toggle complete
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}
