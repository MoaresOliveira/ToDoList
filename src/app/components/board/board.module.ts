import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './column/task/task.component';
import { BoardComponent } from './board.component';
import { ColumnComponent } from './column/column.component';



@NgModule({
  declarations: [
    TaskComponent,
    BoardComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskComponent,
    BoardComponent,
    ColumnComponent
  ]
})
export class BoardModule { }
