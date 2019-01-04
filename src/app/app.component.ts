import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
import {RouterModule} from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  ,
  providers: []
})
export class AppComponent {
  title = 'todo-app';
  todos: Todo[] = [];
  sub : Subscription;
  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
 
  public ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todosQ) => {
          this.todos = Array.from(todosQ);
        }
      );
      
     

      this.sub=this.todoDataService.getListChangedEmitter().subscribe
      ({
        next : () => 
        {this.todos=this.todoDataService.todos;
        },        
        error : error => {console.log(error);},        
        complete : () => {console.log("*******coucou************");}
      }
      );
  }
  }
 

