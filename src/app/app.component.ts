import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularanimation';
  toState = 'state1';

  changeState(state: any) {
    this.toState = state;
  }
}
