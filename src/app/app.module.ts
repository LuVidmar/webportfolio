import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArrowDownDivComponent } from './arrow-down-div/arrow-down-div.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';

//Material

@NgModule({
  declarations: [
    AppComponent,
    ArrowDownDivComponent,
    MainComponentComponent,
    SecondComponentComponent
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
