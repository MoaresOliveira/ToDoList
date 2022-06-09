import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html'
})
export class ColumnComponent implements OnInit {

 

  @Input() title = 'Column'

  constructor() { }

  ngOnInit(): void {
    if(this.title.trim().length == 0){
      this.title = 'Column'
    }
  }

}
