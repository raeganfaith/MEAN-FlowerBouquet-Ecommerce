import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myScriptElement: HTMLScriptElement;
  constructor () {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = '......';
    // this.myScriptElement.type = 'text/javascript';
    // this.myScriptElement.async = true;
    // this.myScriptElement.defer = true;
    document.body.appendChild(this.myScriptElement);
  }
  title = 'flower-bouquet';
}
