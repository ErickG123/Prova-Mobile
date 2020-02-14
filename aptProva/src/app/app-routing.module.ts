import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'ensino-medio', loadChildren: './ensino-medio/ensino-medio.module#EnsinoMedioPageModule' },
  { path: 'ensino-integrado', loadChildren: './ensino-integrado/ensino-integrado.module#EnsinoIntegradoPageModule' },
  { path: 'cursos-tecnicos', loadChildren: './cursos-tecnicos/cursos-tecnicos.module#CursosTecnicosPageModule' },
  { path: 'historico', loadChildren: './historico/historico.module#HistoricoPageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'administracao', loadChildren: './administracao/administracao.module#AdministracaoPageModule' },
  { path: 'contabilidade', loadChildren: './contabilidade/contabilidade.module#ContabilidadePageModule' },
  { path: 'desenvolvimento-sistema', loadChildren: './desenvolvimento-sistema/desenvolvimento-sistema.module#DesenvolvimentoSistemaPageModule' },
  { path: 'informatica', loadChildren: './informatica/informatica.module#InformaticaPageModule' },
  { path: 'informatica-internet', loadChildren: './informatica-internet/informatica-internet.module#InformaticaInternetPageModule' },
  { path: 'logistica', loadChildren: './logistica/logistica.module#LogisticaPageModule' },
  { path: 'marketing', loadChildren: './marketing/marketing.module#MarketingPageModule' },
  { path: 'secretariado', loadChildren: './secretariado/secretariado.module#SecretariadoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
