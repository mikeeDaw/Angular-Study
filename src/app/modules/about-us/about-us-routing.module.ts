import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Declare the in-module routes here.
const routes: Routes = [];

// I still don't understand this why im/exporting RouterModule tho...
// But They said the ones only need to be changed is the values in 'routes' variable.
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
