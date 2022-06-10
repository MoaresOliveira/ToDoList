import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from './components/board/column/task/task.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';

  tasksToDo: Task[] = [
    {
      name: 'task 1',
      description: 'a'
    },
    {
      name: 'task 2',
      description: 'a'
    },
    {
      name: 'task 3',
      description: 'a'
    }
  ]
  tasksDoing: Task[] = []
  tasksDone: Task[] = []

  taskToSave: Task = {
    name: '',
    description: ''
  }


  addTask(){
    if(this.validate()){
      this.tasksToDo.push({...this.taskToSave})
    }
  }

  onDrop(event: CdkDragDrop<Task[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex)
      console.log(event.container.data)
    }else{
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex, event.currentIndex)
      console.log(event.container.data)
    }
  }

  validate() {
    if(this.taskToSave.name.trim().length == 0){
      return false;
    }else if(this.taskToSave.description.trim().length == 0){
      return false;
    }else{
      return true;
    }
  }
}
