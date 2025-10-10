import { Component } from '@angular/core';
import {environment} from '@environments/environment';

@Component({
  selector: 'books-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.component.html',
  styles: ``
})
export class SideMenuHeaderComponent {
  envs = environment;
}
