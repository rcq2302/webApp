import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtentiListComponent } from './utenti-list.component';

const routes: Routes = [
  {
    path: '',
    component: UtentiListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtentiListRoutingModule { }
