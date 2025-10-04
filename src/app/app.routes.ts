import { Routes } from '@angular/router';
import {CounterPageComponent} from './pages/counter/counter-page.component';
import {CarComponent} from './pages/car/car.component';
import {DragonballComponent} from './pages/dragonball/dragonball.component';
import {DragonballSuperComponent} from './pages/dragonball-super/dragonball-super.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'car',
    component: CarComponent
  },
  {
    path: 'dragonball',
    component: DragonballComponent
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
