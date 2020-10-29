import {Component, Input, OnInit, OnChanges, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit} from '@angular/core';

@Component({
  selector: 'outCompWithCheck',
  template: `<span>{{text}}</span>`

})

export class OutputComponentWithCheckState{
  @Input() text: string ;

  /*ngOnInit(){
    console.log("init");
  }
  ngAfterContentInit(){
    console.log("AfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("AfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("AfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("AfterViewChecked");
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("change");
  }
  ngOnDestroy(){
    console.log("destroy");
  }*/
}
