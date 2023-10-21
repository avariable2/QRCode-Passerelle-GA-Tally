import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'screws-redirect';

  ngOnInit() {
    window.location.href = "https://screws-landing-page-avariable2.vercel.app/";
  }
}
