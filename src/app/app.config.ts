import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"trivia-4d020","appId":"1:49422155502:web:75c387d0c8913b2f0d3dff","storageBucket":"trivia-4d020.appspot.com","apiKey":"AIzaSyBXMPn8dCBBmYa-MI63PGRPBd5CQbgM3w8","authDomain":"trivia-4d020.firebaseapp.com","messagingSenderId":"49422155502","measurementId":"G-ZZ1B8N4PHX"})), provideAuth(() => getAuth())]
};
