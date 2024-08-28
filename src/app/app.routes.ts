// Create URL routes here.

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// In the component part, use the class exported.
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
