import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  @Input() title: string = 'Title';
  @Input() button: string = '';
  @Output() onTyping = new EventEmitter();
  @Output() onButtonClick = new EventEmitter();
  inputValue: string = '';
  constructor() { }

  ngOnInit(): void {
    if(this.button.trim().length == 0){
      this.button = '';
    }
  }

  setInputValue(event: Event){
    this.inputValue = (event.target as HTMLInputElement).value;
    this.onTyping.emit({value: this.inputValue})
  }

  click(){
    this.onButtonClick.emit({clicked: true})
    this.inputValue = ''
  }

}
