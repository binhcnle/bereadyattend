import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegistrationPage} from "../pages/registration/registration";
import { BereadyApiProvider } from '../providers/beready-api/beready-api';
import {StudentsPage} from "../pages/students/students";

@NgModule({
  declarations: [
    MyApp,
        RegistrationPage,
        StudentsPage
  ],
  imports: [
    BrowserModule, HttpClientModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      RegistrationPage,
      StudentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BereadyApiProvider,
  ]
})
export class AppModule {}
