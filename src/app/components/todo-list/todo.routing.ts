import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  }
]

export const TodoListRouter = RouterModule.forChild(routes)
