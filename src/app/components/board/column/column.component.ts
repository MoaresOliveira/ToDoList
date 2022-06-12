import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html'
})
export class ColumnComponent implements OnInit {

  @Input() title = 'Column'
  @Input() editable: boolean = false;
  @Output() onAdd = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(this.title.trim().length == 0){
      this.title = 'Column'
    }
  }

  emitEvent(){
    this.onAdd.emit({columnName: this.title})
  }

}
