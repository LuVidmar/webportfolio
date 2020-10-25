import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainframeComponent } from './mainframe/mainframe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArrowDownDivComponent } from './arrow-down-div/arrow-down-div.component';

//Material

@NgModule({
  declarations: [
    AppComponent,
    MainframeComponent,
    ArrowDownDivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
