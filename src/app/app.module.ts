import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Import firebase Angular 
import { AngularFireModule } from "angularfire2"
import { AngularFireAuthModule } from "angularfire2/auth"

import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { HomePage } from '../pages/home/home';
import { PreguntaPage } from '../pages/pregunta/pregunta';
import { FinPage } from '../pages/fin/fin';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PreguntaPage,
    FinPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PreguntaPage,
    FinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
