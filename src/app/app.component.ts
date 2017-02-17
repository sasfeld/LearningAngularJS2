import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  someVariable = 'Hier wird das Klick-Event ausgelöst';

  logValue(event) {
    console.log("AppComponent#logValue(): event: " + event);
  }
}
