import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
    // API: GET /todos
    public getAllTodos(): Observable<Todo[]> 
    {
      //var a=this.http.get<Todo[]>(API_URL + '/todos');
      //a.subscribe(value => console.log(value[0]));

      return this.http.get<Todo[]>(API_URL + '/todos/');
    }
  
  
    public createTodo(todo: Todo): Observable<Todo> 
    {
      return this.http.post<Todo>(API_URL + '/todos', todo);
    }

    public getTodoById(todoId: number): Observable<Todo> {
      return this.http
        .get<Todo>(API_URL + '/todos/' + todoId);
    }
  
    public updateTodo(todo: Todo): Observable<Todo> {
      return this.http
        .put<Todo>(API_URL + '/todos/' + todo.id, todo);
    }
  
    public deleteTodoById(todoId: number): Observable<Todo> {
      return this.http.delete<Todo>(API_URL + '/todos/' + todoId);
    }
  
    
  
}
