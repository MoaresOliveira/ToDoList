import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';

  tasksToDo: string[] = ['Task 1', 'Task 2', 'Task 3', ]
  tasksDoing: string[] = ['Task 1', 'Task 2', 'Task 3', ]
  tasksDone: string[] = ['Task 1', 'Task 2', 'Task 3', ]
}
