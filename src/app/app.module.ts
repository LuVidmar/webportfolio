import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPageModule } from './main-page/main-page.module';
import { Notfound404Component } from './notfound404/notfound404.component';

//Material
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
