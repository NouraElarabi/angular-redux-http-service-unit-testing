import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BootCampSurveyClient';
  show = false;
  timeout = 1000;

  showError() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, this.timeout);
  }
}
