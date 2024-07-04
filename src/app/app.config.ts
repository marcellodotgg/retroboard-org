import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { auditInterceptor } from './interceptors/audit.interceptor';
import { boardActivityInterceptor } from './interceptors/board-activity.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch(), withInterceptors([auditInterceptor, boardActivityInterceptor])),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
};
