import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
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
