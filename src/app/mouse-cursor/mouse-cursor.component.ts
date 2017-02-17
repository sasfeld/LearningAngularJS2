import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {
  mouseX: number;
  mouseY: number;

  constructor() { }

  ngOnInit() {
  }

  onMouseMove(event) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

}
