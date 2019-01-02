import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  ,
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'todo-app';
  todos: Todo[] = [];
  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
  }

  
 
  public ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todosQ) => {
          this.todos = Array.from(todosQ);
        }
      );
  }
 

  

  
}
