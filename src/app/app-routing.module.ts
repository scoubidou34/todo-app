import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';

import { DetailsComponent } from './details/details.component';
import { TodoListMainComponent } from './todo-list-main/todo-list-main.component';

const routes: Routes = [
  {
    path: 'todolist',
    component: TodoListMainComponent
  },
  {
    path: '', redirectTo : 'todolist',pathMatch: 'full'
  },
  {
    path: 'tree',
    component : DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
