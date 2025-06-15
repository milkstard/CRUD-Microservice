import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
   .then(success => console.log(`Bootstrap success`))
  .catch((err) => console.error(err));
