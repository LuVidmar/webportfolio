import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImpossibleListComponent } from './impossible-list/impossible-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Notfound404Component } from './notfound404/notfound404.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: '404', component: Notfound404Component },
  { path: 'impossible-list', component: ImpossibleListComponent },
  { path: '**',   redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
