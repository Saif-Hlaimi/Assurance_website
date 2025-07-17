import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Assurez-vous que les routes sont correctement définies

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,
    provideHttpClient(),
    provideRouter(routes) // Assurez-vous que vos routes sont définies
  ]
})
  .catch(err => console.error(err));
