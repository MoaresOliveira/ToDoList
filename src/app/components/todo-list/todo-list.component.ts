import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { response } from 'express';
import { TaskService } from 'src/app/services/task.service';
import { StatusTask, Task } from '../board/column/task/task.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit{

  title: string = 'ToDoList';
  adding: boolean = false;
  columns:
  {tasksToDo: Task[]; tasksDoing: Task[]; tasksDone: Task[]} | any = {
    tasksToDo:  [],
    tasksDoing: [],
    tasksDone: []
  }

  taskToSave: Task = new Task();

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    let tasks = this.taskService.listTasks();
    tasks.subscribe((response) => {
      this.columns.tasksToDo = response.filter(task => task.status == StatusTask.ToDo)
      this.columns.tasksDoing = response.filter(task => task.status == StatusTask.Doing)
      this.columns.tasksDone = response.filter(task => task.status == StatusTask.Done)
    })

  }

  // listTasks(){

  // }


  addTask() {
    if (this.validate()) {
      this.taskService.addTask(this.taskToSave);
    }
    this.ngOnInit()
    this.adding = false;
  }

  editTask(task: Task, list?: string) {
    console.log(task.name)
    task.dateCreation = new Date();
    this.taskService.updateTask(task)
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
      console.log(event.container.data[event.currentIndex]);
      console.log(event.container.element.nativeElement.title);
      let task: Task = event.container.data[event.currentIndex]
      let statusString = event.container.element.nativeElement.title.replace(" ", "");
      console.log(statusString)
      task.status = StatusTask[statusString as keyof typeof StatusTask];
      this.editTask(task)
    }
  }

  validate() {
    if (this.taskToSave.name.trim().length == 0) {
      return false;
    } else if (this.taskToSave.description.trim().length == 0) {
      return false;
    } else {
      return true;
    }
  }
}
