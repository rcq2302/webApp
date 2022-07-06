import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtentiListComponent } from './utenti-list.component';
import { UtentiListRoutingModule } from './utenti-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    UtentiListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    UtentiListComponent
  ]
})
export class UtentiListModule { }
