import {Routes} from '@angular/router';
import {PassComponent} from './pass/pass.component';
import {StartComponent} from './start/start.component';

export const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'pass', component: PassComponent},
];
