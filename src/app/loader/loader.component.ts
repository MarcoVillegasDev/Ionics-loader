import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {

  @Input() images: string[] = [];
  @Input() texts: string[] = [];
  @Input() contentInterval!: number;
  @Input() loaderDuration!: number;

  currentImageIndex: number = 0;
  currentTextIndex: number = 0;
  isLoaderActive: boolean = true;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.startLoader();
  }

  startLoader() {

    const imageChange = setInterval(() => {
      this.fadeOutIn(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      });
    }, this.contentInterval);

    const textChange = setInterval(() => {
      this.fadeOutIn(() => {
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      });
    }, this.contentInterval);

    setTimeout(() => {
      clearInterval(imageChange);
      clearInterval(textChange);
      this.isLoaderActive = false;
    }, this.loaderDuration);
  }

  fadeOutIn(changeContent: () => void) {
    const loaderContainer = this.el.nativeElement.querySelector('.loader-container');
    this.renderer.setStyle(loaderContainer, 'opacity', '0');

    setTimeout(() => {
      changeContent();
      this.renderer.setStyle(loaderContainer, 'opacity', '1');
    }, 500);
  }
}
