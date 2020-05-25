import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // Input State
  private inputState: object;
  private worldObjects: Set<any>;

  @ViewChild('svgCanvas')
  private svgCanvas: ElementRef;

  constructor() { }

  ngOnInit() {
    this.worldObjects = new Set;
  }

  handleMouseDown(event) {
    console.log(event);
    if (event.target.classList.contains('svg-canvas')) {
      this.createCircle(event.clientX, event.clientY);
    }
  }

  private createCircle(posX: number, posY: number) {
    var newCircle = new CircleObject(posX, posY);
    this.worldObjects.add(newCircle.svgElement);
    this.svgCanvas.nativeElement.appendChild(newCircle.svgElement);
  }

  private removeElement(target) {
    target.parentElement.removeChild(target);
  }

}

class InputState {
  public mouseDown: boolean;
  public shiftKeyDown: boolean;
}

class CircleObject {
  svgElement: SVGCircleElement;
  clicked: boolean;
  hovered: boolean;
  offsetX: number;
  offsetY: number;

  constructor(
    posX: number,
    posY: number,
    radius: number = 50,
    stroke: string = '#FFF',
    strokeFocus: string = '#55F',
    strokeWidth: string = '2px',
    fill: string = '#000') {
    this.clicked = false;
    this.hovered = false;
    this.svgElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.svgElement.classList.add('circle');
    this.svgElement.setAttribute("cx", String(posX));
    this.svgElement.setAttribute("cy", String(posY));
    this.svgElement.setAttribute("r", String(radius));
    this.svgElement.setAttribute("stroke", stroke);
    this.svgElement.setAttribute("stroke-width", String(strokeWidth));
    this.svgElement.setAttribute("fill", fill);
    this.svgElement.addEventListener('mouseenter', this.handleMouseEnter(this))
    this.svgElement.addEventListener('mouseleave', this.handleMouseLeave(this))
    this.svgElement.addEventListener('mousedown', this.handleMouseDown(this))
    this.svgElement.addEventListener('mouseup', this.handleMouseUp(this))
  }

  private handleMouseEnter(ref) {
    return function(event) {
      ref.hovered = true;
      ref.updateColor();
    }
  }

  private handleMouseLeave(ref) {
    return function(event) {
      ref.hovered = false;
      ref.updateColor();
    }
  }

  private handleMouseDown(ref) {
    return function(event) {
      ref.clicked = true;
      ref.offsetX = ref.svgElement.getAttribute("cx") - event.clientX
      ref.offsetY = ref.svgElement.getAttribute("cy") - event.clientY
      var parent = ref.svgElement.parentElement
      parent.addEventListener('mousemove', ref.handleMouseMove(ref))
      ref.updateColor();
    }
  }

  private handleMouseUp(ref) {
    return function(event) {
      ref.clicked = false;
      var parent = ref.svgElement.parentElement
      parent.removeEventListener('mousemove', ref.handleMouseMove(ref))
      ref.updateColor();
    }
  }

  private handleMouseMove(ref) {
    return function(event) {
      if (ref.clicked) {
        ref.svgElement.setAttribute("cx", event.clientX + ref.offsetX);
        ref.svgElement.setAttribute("cy", event.clientY + ref.offsetY);
      }
    }
  }

  private updateColor() {
    if (this.clicked) {
      this.svgElement.setAttribute("stroke", '#FF5');
    }
    else if (this.hovered) {
      this.svgElement.setAttribute("stroke", '#55F');
    }
    else {
      this.svgElement.setAttribute("stroke", '#FFF');
    }

  }

}