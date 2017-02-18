import {Directive, Input, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective {
  private innerDiv: HTMLDivElement;

  @Input()
  set tooltip(newVal) {
    this.innerDiv.innerText = newVal;
    this.elementRef.nativeElement.appendChild(this.innerDiv);
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("MouseEnter: " + this.tooltip);
  };
  @HostListener('mouseleave') onMouseLeave() {
    console.log("MouseLeave " + this.tooltip);
  };
  constructor(  private elementRef: ElementRef) {
    this.innerDiv = document.createElement("div");
  }

}
