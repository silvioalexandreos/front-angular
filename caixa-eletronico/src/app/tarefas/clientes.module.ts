import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClienteService } from './shared';

@NgModule({
  declarations: [],
  providers: [
    ClienteService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class TarefasModule { }
