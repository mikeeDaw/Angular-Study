import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutComponent } from './about/about.component';

// `@NgModule` decorator allows to im/export declare things related to the module being constructed.

@NgModule({
  // 'Declarations' registers the created component inside the module & that component can use anything inside the 'imports' property.
  declarations: [AboutComponent],
  imports: [CommonModule, AboutUsRoutingModule],
  // 'Export' used to export stuff outside the module.
  exports: [],
  // Declare providers to be used on the module.
  providers: [],
})
export class AboutUsModule {}
