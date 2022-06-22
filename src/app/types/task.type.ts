export enum StatusTask {
  ToDo = "ToDo",
  Doing = "Doing",
  Done = "Done"
}

export class Task {
  id?: number;
  name: string = "";
  description: string = "";
  dateCreation: Date;
  status: StatusTask;
  order: number;

  constructor(){
    this.dateCreation = new Date();
    this.status = StatusTask.ToDo;
    this.order = 0
  }

}
