import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './column/task/task.component';
import { BoardComponent } from './board.component';
import { ColumnComponent } from './column/column.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    TaskComponent,
    BoardComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    TaskComponent,
    BoardComponent,
    ColumnComponent,
    DragDropModule
  ]
})
export class BoardModule { }
