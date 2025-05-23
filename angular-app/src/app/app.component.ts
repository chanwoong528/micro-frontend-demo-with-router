import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: false,

  template: `
  <h1>{{ title }}</h1>
  <app-nav />
  <h1>{{ title }}</h1>
    <router-outlet />
  `
})
export class AppComponent {
  title = 'angular-app';
}
