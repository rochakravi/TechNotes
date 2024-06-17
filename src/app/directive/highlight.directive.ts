import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const code = this.el.nativeElement.innerHTML;
    const highlightedCode = this.syntaxHighlight(code);
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', highlightedCode);
  }

  syntaxHighlight(code: string): string {
    return `<code class="highlight">${code}</code>`;
  }

}
