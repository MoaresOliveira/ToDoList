export enum StatusTask {
  ToDo = 'ToDo',
  Doing = 'Doing',
  Done = 'Done',
}

export class Task {
  id?: number;
  name: string = '';
  description: string = '';
  dateCreation: Date;
  status: StatusTask;
  index: number;

  constructor() {
    this.dateCreation = new Date();
    this.status = StatusTask.ToDo;
    this.index = 0;
  }
}
