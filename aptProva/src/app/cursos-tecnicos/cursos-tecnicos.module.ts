import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CursosTecnicosPage } from './cursos-tecnicos.page';

const routes: Routes = [
  {
    path: '',
    component: CursosTecnicosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CursosTecnicosPage]
})
export class CursosTecnicosPageModule {}
