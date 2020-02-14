import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DesenvolvimentoSistemaPage } from './desenvolvimento-sistema.page';

const routes: Routes = [
  {
    path: '',
    component: DesenvolvimentoSistemaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DesenvolvimentoSistemaPage]
})
export class DesenvolvimentoSistemaPageModule {}
