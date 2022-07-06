import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtentiEditComponent } from './utenti-edit.component';
import { UtentiEditRoutingModule } from './utenti-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    UtentiEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    UtentiEditComponent
  ]
})
export class UtentiEditModule { }
