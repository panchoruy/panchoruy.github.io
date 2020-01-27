import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('svgCanvas', { static: false })
  private svgCanvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  private handleClick(mouseEvent) {
    if (mouseEvent.target.tagName == "svg"){
      this.createCircle(mouseEvent.clientX, mouseEvent.clientY, 50, "#fff", 3, "#000");
    }
    else if (mouseEvent.target.tagName == "circle") {
      this.removeElement(mouseEvent.target);
    }
  }

  private handleDrag(mouseEvent) {
    console.log(mouseEvent);
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
