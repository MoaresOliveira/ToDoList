import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  @Input() id: number = 1;
  @Input() title: string = 'Task';
  @Input() description: string = 'Description';
  @Input() editable = true;
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  @ViewChild('inputTitle') inputTitle: ElementRef;
  @ViewChild('inputDescription') inputDescription: ElementRef;

  editing: boolean = false;
  date: Date = new Date();

  constructor(inputTitleRef: ElementRef, inputDescriptionRef: ElementRef) {
    this.inputTitle = inputTitleRef;
    this.inputDescription = inputDescriptionRef;
  }

  ngOnInit(): void {
    if (this.title.trim().length == 0) {
      this.title = 'Task';
    }
  }

  editTask() {
    this.editing = true;
    console.log(this.inputTitle);
  }

  saveEdition() {
    this.editing = false;
    this.title = this.inputTitle.nativeElement.value;
    this.description = this.inputDescription.nativeElement.value;
    this.onEdit.emit({
      task: {
        id: this.id,
        name: this.title,
        description: this.description,
      },
    });
  }

  cancelEdition() {
    this.editing = false;
  }

  deleteTask() {
    this.onDelete.emit({
      task: {
        id: this.id,
        name: this.title,
        description: this.description,
      },
    });
  }

  getDate() {
    let day = this.formatNumber(this.date.getDate());
    let month = this.formatNumber(this.date.getMonth() + 1);
    let year = this.formatNumber(this.date.getFullYear());

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
