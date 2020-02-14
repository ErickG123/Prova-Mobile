import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InformaticaInternetPage } from './informatica-internet.page';

const routes: Routes = [
  {
    path: '',
    component: InformaticaInternetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InformaticaInternetPage]
})
export class InformaticaInternetPageModule {}
