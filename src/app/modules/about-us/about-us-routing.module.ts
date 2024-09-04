import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

// Declare the in-module routes here.
const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
];

// I still don't understand this why im/exporting RouterModule tho...
// But They said the ones only need to be changed is the values in 'routes' variable.
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
