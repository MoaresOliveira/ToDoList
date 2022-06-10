import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { FormModule } from '../form/form.module';
import { BoardModule } from '../board/board.module';
import { TodoListRouter } from './todo.routing';



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    BoardModule,
    TodoListRouter
  ]
})
export class TodoListModule { }
