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
  {tasksToDo: Task[]; tasksDoing: Task[]; tasksDone: Task[]} = {
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

  editTask(task: Task) {
    let index = this.columns['tasksToDo'].findIndex((item) => item.id == task.id);
    if (index != -1) {
      this.columns['tasksToDo'][index] = task;
    }
    console.log(this.columns['tasksToDo']);
  }

  deleteTask(taskDeleted: Task) {
    this.columns['tasksToDo'] = this.columns['tasksToDo'].filter((task) => task.id != taskDeleted.id);
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
    } else if (this.columns['tasksToDo'].some((task) => task.id == this.taskToSave.id)) {
      while (this.columns['tasksToDo'].some((task) => task.id == this.taskToSave.id)) {
        this.taskToSave.id++;
      }
      return true;
    } else {
      return true;
    }
  }
}
