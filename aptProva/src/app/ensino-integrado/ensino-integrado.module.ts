import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnsinoIntegradoPage } from './ensino-integrado.page';

const routes: Routes = [
  {
    path: '',
    component: EnsinoIntegradoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnsinoIntegradoPage]
})
export class EnsinoIntegradoPageModule {}
