import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { PrimaryComponent } from './primary/primary.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [MainPageComponent, PrimaryComponent, SecondaryComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MainPageModule { }
