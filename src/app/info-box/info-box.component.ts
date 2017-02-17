import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
  isHidden: boolean = true;
  btnCaption: String = "Show";

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isHidden = !this.isHidden;

    if (!this.isHidden) {
      this.btnCaption = "Hide";
    } else {
      this.btnCaption = "Show";
    }
  }
}
