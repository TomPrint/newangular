import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"angular18-97e2d","appId":"1:837273707035:web:73045a368f9da188b0cebe","storageBucket":"angular18-97e2d.appspot.com","apiKey":"AIzaSyAoTFar_I1I1sGIbrPMGLFF_AdM2J2uRzc","authDomain":"angular18-97e2d.firebaseapp.com","messagingSenderId":"837273707035"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideAnimationsAsync()]
};
