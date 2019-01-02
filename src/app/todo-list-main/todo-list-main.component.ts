import { Component, OnInit ,Output,Input } from '@angular/core';
import { Todo } from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'app-todo-list-main',
  templateUrl: './todo-list-main.component.html',
  styleUrls: ['./todo-list-main.component.css'],
  providers: [TodoDataService]
})
export class TodoListMainComponent implements OnInit {

  todos: Todo[] = [];
  

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

  onAddTodo(todo) {
    this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
      }

      // Service is now available as this.todoDataService
  onToggleTodoComplete(todo) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(
        (updatedTodo) => {
          todo = updatedTodo;
        }
      );
  }
      onRemoveTodo(todoId) {
        this.todoDataService
          .deleteTodoById(todoId)
          .subscribe(
            (_) => {
              this.todos = this.todos.filter((t) => t.id !== todoId);
            }
          );
      }
}
