import { Component, OnInit, Input, Output, HostListener, HostBinding, ElementRef, ViewChild } from '@angular/core';

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
  private isFullscreen : boolean;
  constructor() { }

  ngOnInit() {
    this.isFullscreen = false;
    // Calculate source?
    this.currentSource = this.sizes.find(size => size.label == "Medium 640").source;
    console.log(this.sizes.find(size => size.label == "Medium 640").source);
  }

  @HostListener('click', ['$event.target'])
  onClick(button) {
    this.isFullscreen = !this.isFullscreen;
  }


}
