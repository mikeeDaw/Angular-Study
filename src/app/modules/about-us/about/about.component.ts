import { Component } from '@angular/core';

// No 'standalone:true' and 'import' bc this component could not exist alone (not standalone duh.)
// Declare this in the 'declarations' in the module bc it relies on that module.
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
