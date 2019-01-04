import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import {RouterModule} from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { TreeviewModule} from '../lib';
import { TodoListMainComponent } from './todo-list-main/todo-list-main.component';
import { TodoDataService } from './todo-data.service';
import { View3DModule } from './view3-d/view3-d.module';


@NgModule({
  imports: [   
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    TreeviewModule.forRoot(),
    FormsModule,
    View3DModule
  ],
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    DetailsComponent,
    EmptyComponent,
    TodoListMainComponent
  ],
 
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
