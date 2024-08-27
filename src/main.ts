// This is the Starting point of the App.

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// This line says Bootstraping (initiallizing and running) the main component 'AppComponent'
// with a specific configuration 'appConfig'.
// And if something wrong happens, console log an error.
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
