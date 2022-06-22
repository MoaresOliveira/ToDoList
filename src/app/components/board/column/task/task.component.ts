import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Task } from '../../../../types/task.type';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {

  @Input() task: Task = new Task();
  @Input() bgColor: string = '';
  @Input() editable = true;

  @Output() onEdit = new EventEmitter<Task>();
  @Output() onDelete = new EventEmitter<Task>();

  @ViewChild('inputTitle') inputTitle: ElementRef;
  @ViewChild('inputDescription') inputDescription: ElementRef;

  editing: boolean = false;

  constructor(inputTitleRef: ElementRef, inputDescriptionRef: ElementRef) {
    this.inputTitle = inputTitleRef;
    this.inputDescription = inputDescriptionRef;
    console.log("Construtor: "+ this.getDate())
  }

  ngOnInit(): void {
    if (this.task.name.trim().length == 0) {
      this.task.name = 'Task';
    }
    if(this.task.dateCreation == undefined){
      this.task.dateCreation = new Date(Date.now())
    }
  }

  editTask() {
    this.editing = true;
    console.log(this.inputTitle);
  }

  saveEdition() {
    this.editing = false;
    this.task.name = this.inputTitle.nativeElement.value;
    this.task.description = this.inputDescription.nativeElement.value;
    this.onEdit.emit(this.task);
  }

  cancelEdition() {
    this.editing = false;
  }

  deleteTask() {
    this.onDelete.emit(this.task);
  }

  getDate() {
    let date = new Date(this.task.dateCreation as Date);
    console.log(date)
    let day = this.formatNumber(date.getDate());
    let month = this.formatNumber(date.getMonth() + 1);
    let year = this.formatNumber(date.getFullYear());

    return `${day}/${month}/${year}`;
  }

  formatNumber(number: number) {
    if (number < 10) {
      return '0' + number;
    } else {
      return number.toString();
    }
  }
}
