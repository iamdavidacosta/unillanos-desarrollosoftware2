import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'inicio';
}

// app.components.css
// app.components.spect.ts
// ng serve
// ng serve -o
