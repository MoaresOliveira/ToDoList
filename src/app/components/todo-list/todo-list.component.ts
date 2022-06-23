import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { StatusTask, Task } from '../../types/task.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit{

  title: string = 'ToDoList';
  adding: boolean = false;
  @Input() control = true;
  columns:
  {tasksToDo: Task[]; tasksDoing: Task[]; tasksDone: Task[]} | any = {
    tasksToDo:  [],
    tasksDoing: [],
    tasksDone: []
  }

  taskToSave: Task = new Task();

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.control = !this.control
    this.fillBoard()
  }

  addTask() {
    if (this.validate()) {
      this.taskToSave.order = this.columns.tasksToDo.length? this.columns.tasksToDo.length - 1: 0;
      this.taskToSave.order = 12
      this.taskService.addTask(this.taskToSave);
    }
    this.adding = false;
    setTimeout(() => this.fillBoard(),100)
  }

  editTask(task: Task) {
    task.dateCreation = new Date();
    this.taskService.updateTask(task)
  }

  deleteTask(taskDeleted: Task) {
    let id = (taskDeleted.id as number)
    this.taskService.deleteTask(id).subscribe(response => {
      setTimeout(() => {
        this.fillBoard()
      },100)
    });
  }

  onDrop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log((event.item.element.nativeElement.attributes as any).id.value);
      console.log("Previous Index " + event.previousIndex);
      console.log("Current Index " + event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      let task: Task = event.container.data[event.currentIndex]
      let statusString = event.container.element.nativeElement.title.replace(" ", "");
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

  fillBoard(){
    this.taskService.listTasks().subscribe((response) => {
          this.listTasks(response)
      })

  }

  listTasks(tasks: Task[]){
    if(tasks != undefined){
      this.columns.tasksToDo = [...tasks.filter(task => task.status == StatusTask.ToDo)]
      this.columns.tasksDoing = [...tasks.filter(task => task.status == StatusTask.Doing)];
      this.columns.tasksDone = [...tasks.filter(task => task.status == StatusTask.Done)];
    }else{
      this.columns.tasksToDo = []
      this.columns.tasksDoing = []
      this.columns.tasksDone = []
    }
  }

}
