// Usage example: <textarea AutoSize  [maximumHeight]="250" [minHeight]="40" class="animated"></textarea>

import { Directive, HostListener, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: 'textarea[AutoSize]'
})
export class TextareaAutoResizeDirective implements OnInit {
  private delay = 50;
  @Input() maximumHeight: number; // based on pixel
  @Input() minHeight: number; // based on pixel

  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef.nativeElement.scrollHeight);
  }

  ngOnInit() {
    if (this.elementRef.nativeElement.scrollHeight) {
      setTimeout(() => this.adjust());
    }
  }

  @HostListener(':input')
  @HostListener(':cut')
  @HostListener(':paste')
  @HostListener(':change')
  onInput() {
    this.adjust();
  }

  adjust(): void {
    const textArea = this.elementRef.nativeElement;
    const maxHeight = this.maximumHeight;
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    if (textArea.scrollHeight <= maxHeight) { // while current height is less than maximumHeight
      textArea.style.overflow = 'hidden';
      textArea.style.height = `${textArea.scrollHeight + 10}px`;
    } else { // greater than maximumHeight
      textArea.style.height = `${maxHeight}px`;
      textArea.style.overflow = 'auto';
    }
  }

}
