import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Fire
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { MainPageModule } from './main-page/main-page.module';
import { Notfound404Component } from './notfound404/notfound404.component';
import { ImpossibleListModule } from './impossible-list/impossible-list.module';

//Material
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MainPageModule,
    ImpossibleListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
