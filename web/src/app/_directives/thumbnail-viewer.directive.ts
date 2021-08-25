import { Directive, Input, ElementRef, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: 'img[thumbnailViewer]'
})
export class ThumbnailViewerDirective {
  // @Input('ImageName') public imageName: string;
  // @Input('Size') public maxSize: number = 400;
  // @Input('Url') public folderPath: string;

  // constructor(private el: ElementRef, private renderer: Renderer2) { }

  // public ngOnChanges() {
  //   this.el.src = reader.result as string;
  // };

}

