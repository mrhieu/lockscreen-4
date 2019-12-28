import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TapticEngine } from '@ionic-native/taptic-engine/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KeypadPageModule } from './plugins/lockscreen/components/keypad/keypad.module';
import { LockscreenService } from './plugins/lockscreen/services/lockscreen.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    KeypadPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TapticEngine,
    LockscreenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
