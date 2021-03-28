import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { ImpossibleListComponent } from './impossible-list.component';
import { FirestoreService } from './firestore.service';



@NgModule({
  declarations: [
    LoadingBarComponent,
    ImpossibleListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FirestoreService
  ],
})
export class ImpossibleListModule { }
