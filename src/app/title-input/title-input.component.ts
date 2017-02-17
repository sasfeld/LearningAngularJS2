import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.css']
})
export class TitleInputComponent implements OnInit {

  @Input('inputTitle') title: String;
  @Output('titleClicked') titleClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleTitleClicked() {
    this.titleClicked.emit("test");
  }

}
