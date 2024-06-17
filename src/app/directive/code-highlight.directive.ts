import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import * as Prism from 'prismjs';

@Directive({
  selector: '[appCodeHighlight]',
  standalone: true
})
export class CodeHighlightDirective implements AfterViewInit{

  constructor(private el: ElementRef) { }
  ngAfterViewInit() {
    Prism.highlightElement(this.el.nativeElement);
  }

}
