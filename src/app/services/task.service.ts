import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../components/board/column/task/task.type';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:8080/api/task'

  constructor(private http: HttpClient) { }

  addTask(task: Task){
    let url = this.baseUrl + "/new"
    let taskForm = {
      name: task.name,
      description: task.description,
      dateCreation: task.dateCreation.toJSON().split("T")[0],
      status: task.status,
    }
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.http.post(url,JSON.stringify(taskForm),httpOptions).subscribe(response => console.log(response), error => console.log("Deu ruim" + error.message))
  }

  listTasks(): Observable<Task[]> {
    let url = this.baseUrl
    let tasks: Task[] = [];
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.get<Task[]>(url,httpOptions)
  }

  updateTask(task: Task){
    let url = this.baseUrl + "/update/" + task.id;
    let taskForm = {
      name: task.name,
      description: task.description,
      dateCreation: task.dateCreation.toJSON().split("T")[0],
      status: task.status,
    }
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.http.put(url,taskForm,httpOptions).subscribe(response => console.log(response))
  }

  deleteTask(id: number){
    let url = this.baseUrl + "/delete/" + id
    this.http.delete(url)
  }
}
