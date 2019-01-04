import { Injectable,Output,EventEmitter} from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoDataService {

 
  private subject = new Subject<any>();
  todos: Todo[] = [];
  constructor(private api: ApiService) {
  
  }

  
  getListChangedEmitter() :Observable<any>  {
    return this.subject.asObservable();
  }
  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {

    let res=this.api.createTodo(todo);   
    
    return res;
  }

  updateFromList(_todos : Todo [])
  {
    this.todos= Array.from(_todos);       
    this.subject.next();

  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): Observable<Todo> {
    let res=this.api.deleteTodoById(id);
    this.subject.next();
    return res;
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    this.subject.next();
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
