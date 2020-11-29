import { Component, OnInit } from '@angular/core';

declare let lottie: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Enable logo animation.
    lottie.loadAnimation({
      container: document.getElementById("logo"), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/animated_logo.json' // the path to the animation json
    });
  }

}
