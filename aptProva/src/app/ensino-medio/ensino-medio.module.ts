import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnsinoMedioPage } from './ensino-medio.page';

const routes: Routes = [
  {
    path: '',
    component: EnsinoMedioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnsinoMedioPage]
})
export class EnsinoMedioPageModule {}
