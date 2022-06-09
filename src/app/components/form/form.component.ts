import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() title: string = 'Title';
  @Input() button: string = '';
  constructor() { }

  ngOnInit(): void {
    if(this.button.trim().length == 0){
      this.button = '';
    }
  }

}
