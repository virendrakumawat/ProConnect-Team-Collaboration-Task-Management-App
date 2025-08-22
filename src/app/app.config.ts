import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideToastr, ToastrModule} from 'ngx-toastr'
import { HttpClient, provideHttpClient } from '@angular/common/http';
// import { provideToastr } from 'ngx-toastr'; 

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())
    ,provideAnimations(),
    provideToastr({
       timeOut: 3000,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  closeButton: false,
  progressBar: false,
  progressAnimation: 'decreasing',
  easeTime: 300
    }),

    provideHttpClient()
  ]
};
