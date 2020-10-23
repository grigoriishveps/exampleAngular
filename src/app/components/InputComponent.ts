import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'incomp',
  template: `<input type="text" [ngModel]="text" (ngModelChange)="onTextChange($event)">`
})

export class InputComponent{
    @Input() text;
    @Output() textChange = new EventEmitter<string>();
    onTextChange(model: string){
      this.text = model;
      this.textChange.emit(model);
    }
}
