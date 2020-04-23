import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // Input State
  private inputState: object;

  @ViewChild('svgCanvas', { static: false })
  private svgCanvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // @HostListener('window:keydown', ['$event'])
  // handleKeyDown(event: KeyboardEvent) {

  // }

  // @HostListener('window:keyup', ['$event'])
  // handleKeyUp(event: KeyboardEvent) {

  // }

  private handleMouseDown(event) {
    console.log(event);
    if (event.target.classList.contains('svg-canvas')) {
      console.log("SVG Clicked!");

    }
    // console.log("MouseDown!");
    // console.log(event);
  }

  private handleMouseOver(event) {
    // console.log("MouseOver!");
    // console.log(event);
  }

  private handleMouseUp(event) {
    // console.log("MouseUp!");
    // console.log(event);
  }

  private handleMouseMove(event) {
    // console.log("MouseMove!");
    // console.log(event);
  }


  private createCircle(x, y, r, s, sw, f){
    var newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute("cx", String(x));
    newCircle.setAttribute("cy", String(y));
    newCircle.setAttribute("r", String(r));
    newCircle.setAttribute("stroke", s);
    newCircle.setAttribute("stroke-width", String(sw));
    newCircle.setAttribute("fill", f);
    this.svgCanvas.nativeElement.appendChild(newCircle);
  }

  private removeElement(target) {
    target.parentElement.removeChild(target);
  }

}

class InputState {
  public mouseDown: boolean;
  public shiftKeyDown: boolean;
}
