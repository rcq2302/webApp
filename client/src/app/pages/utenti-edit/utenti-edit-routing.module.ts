import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtentiEditComponent } from './utenti-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UtentiEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtentiEditRoutingModule { }
