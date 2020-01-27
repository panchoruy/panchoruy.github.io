import { Component, OnInit, Input, Output, HostListener, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() sizes: any;
  @HostBinding('style.height') 
  @Input() height: string;
  @HostBinding('style.width') 
  @Input() width: string;
  @HostBinding('style.top') 
  @Input() top: string;
  @HostBinding('style.left') 
  @Input() left: string;

  currentSource : string;
  isFullscreen : boolean;
  constructor() { }

  ngOnInit() {
    this.isFullscreen = false;
    // Source thats always bigger than the row size.
    this.currentSource = this.sizes.find(size => size.label == "Medium 640").source;
  }

  @HostListener('click', ['$event.target'])
  onClick(button) {
    this.isFullscreen = !this.isFullscreen;
    if (this.isFullscreen) {
      for (var size of this.sizes) {
        if (size.width >= window.innerWidth || size.height >= window.innerHeight) {
          this.currentSource = size.source;
          break;
        }
      }
    }
  }


}
