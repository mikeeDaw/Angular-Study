// Create URL routes here.

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

// In the component part, use the class exported.
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'about-us',
    // This is how to lazy load a module when accessing a specific route.
    loadChildren: () =>
      import('../app/modules/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
];
