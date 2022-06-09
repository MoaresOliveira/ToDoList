import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() title: string = 'Task';
  @Input() description: string = 'Description';
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    if(this.title.trim().length == 0){
      this.title = 'Task'
    }
  }

  getDate(){
    let day = this.formatNumber(this.date.getDate());
    let month = this.formatNumber(this.date.getMonth() + 1);
    let year = this.formatNumber(this.date.getFullYear());

    return `${day}/${month}/${year}`
  }

  formatNumber(number: number){
    if(number < 10){
      return '0' + number;
    }else{
      return number.toString();
    }
  }

}
