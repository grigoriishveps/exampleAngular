import {Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector:'[bold]'
})

export class BoldDirective{
  private fontColor:string = "black";
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementRef.nativeElement.style.fontWeight="bold";
    //this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
    //this.renderer.setStyle(this.elementRef.nativeElement, "color", "blue");
  }
  @Input() defaultSize = '16px';
  @Input() selectedSize = '18px';
  private fontSize;
  OnInit
  @HostBinding("style.color") get getFontColor(){
    return this.fontColor;
  }
  @HostBinding("") get getFontSize(){
    return this.fontSize;
  }
  @HostBinding("style.cursor") get getCursor(){
    return "pointer";
  }
  @HostListener("mouseenter") onMouseEnter(){
    this.setColor("red");
    this
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.setColor("black");
  }

  @HostListener("click") onMouseClick(){
    this.setColor("green");
  }
  private setColor(val: string) {
    this.fontColor = val;
  }
  private setFontSize(val: string) {
    this.fontSize = val;
  }
}
