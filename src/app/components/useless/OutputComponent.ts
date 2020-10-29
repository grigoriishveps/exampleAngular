import {Component, Input} from '@angular/core';

@Component({
  selector: 'outcomp',
  template: `<span [style.color]="colorValue">{{text}}</span>`,
  //template: `<span [style.color]="colorValue?'black':'yellow'">{{text}}</span>`,
  //template: `<span [ngStyle]="colorValue">{{text}}</span>`,
  host:{
    '(mouseenter)':'onMouseEnter()',
    '(mouseleave)':'onMouseLeave()'
  }
})

export class OutputComponent{
  @Input() text: string ;

  // public colorValue= 'black';
  // onMouseEnter(){
  //   this.colorValue='yellow';
  // }
  // onMouseLeave(){
  //   this.colorValue='black';
  // }


  // public colorValue= true;
  // onMouseEnter(){
  //   this.colorValue=false;
  // }
  // onMouseLeave(){
  //   this.colorValue=true;
  // }

  public colorValue= {'color':'black'};
  onMouseEnter(){
    this.colorValue['color']='yellow';
  }
  onMouseLeave(){
    this.colorValue['color']='black';
  }
}
