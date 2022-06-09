import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit  {

  @Input() title:string = 'Board';

  ngOnInit(): void {
    if(this.title.trim().length == 0){
      this.title = 'Board'
    }
  }
}
