import { Component, OnInit, Input, Output, HostListener, HostBinding, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() src: string;
  @Input() srcOriginal: string;
  @HostBinding('style.height') 
  @Input() height: string;
  @HostBinding('style.width') 
  @Input() width: string;
  @HostBinding('style.top') 
  @Input() top: string;
  @HostBinding('style.left') 
  @Input() left: string;

  private isFullscreen : boolean;
  constructor() { }

  ngOnInit() {
    this.isFullscreen = false;
  }

  @HostListener('click', ['$event.target'])
  onClick(button) {
    this.isFullscreen = !this.isFullscreen;
  }


}
