import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ColumnComponent } from '../board/column/column.component';
import { Task } from '../board/column/task/task.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  title = 'ToDoList';

  columns:
  {tasksToDo: Task[]; tasksDoing: Task[]; tasksDone: Task[]} | any = {
    tasksToDo:  [
      {
        id: 1,
        name: 'task 1',
        description: 'a',
      },
      {
        id: 2,
        name: 'task 2',
        description: 'a',
      },
      {
        id: 3,
        name: 'task 3',
        description: 'a',
      },
    ],
    tasksDoing: [],
    tasksDone: []
  }


  taskToSave: Task = {
    id: 1,
    name: '',
    description: '',
  };

  addTask() {
    if (this.validate()) {
      this.columns['tasksToDo'].push({ ...this.taskToSave });
    }
    this.taskToSave.id++;
  }

  editTask(task: Task, list: string) {
    let index = (this.columns[list] as Task[]).findIndex((item) => item.id == task.id);
    if (index != -1) {
      this.columns[list][index] = task;
    }
    console.log(list);
  }

  deleteTask(taskDeleted: Task, list: string) {
    this.columns[list] = (this.columns[list] as Task[]).filter((task) => task.id != taskDeleted.id);
  }

  onDrop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(event.container.data);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(event.container.data);
    }
  }

  validate() {
    if (this.taskToSave.name.trim().length == 0) {
      return false;
    } else if (this.taskToSave.description.trim().length == 0) {
      return false;
    } else if ((this.columns['tasksToDo'] as Task[]).some((task) => task.id == this.taskToSave.id)) {
      while ((this.columns['tasksToDo'] as Task[]).some((task) => task.id == this.taskToSave.id)) {
        this.taskToSave.id++;
      }
      return true;
    } else {
      return true;
    }
  }
}
