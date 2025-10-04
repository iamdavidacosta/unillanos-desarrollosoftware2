import { Component } from '@angular/core';
import { SideMenuHeader } from '../../components/side-menu/side-menu-header/side-menu-header';
import { SideMenuOptions } from '../../components/side-menu/side-menu-options/side-menu-options';

@Component({
  selector: 'gifs-side-menu',
  imports: [
    SideMenuHeader,
    SideMenuOptions
  ],
  templateUrl: './side-menu.html',
  styles: ``
})
export class SideMenu {

}
