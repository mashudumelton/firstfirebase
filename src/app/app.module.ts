import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { MyApp } from './app.component';
var Firebaseconfig = {
  apiKey: "AIzaSyDgNkUkuPGUuQoHPSq9GvY2esDKyEr0sh0",
  authDomain: "firelist-c7a82.firebaseapp.com",
  databaseURL: "https://firelist-c7a82.firebaseio.com",
  projectId: "firelist-c7a82",
  storageBucket: "firelist-c7a82.appspot.com",
  messagingSenderId: "179263208493"
};

@NgModule({
  declarations: [
    MyApp,
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Firebaseconfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
