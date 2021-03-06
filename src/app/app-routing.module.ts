import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/presentacion',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'presentacion',
    loadChildren: () => import('./presentacion/presentacion.module').then( m => m.PresentacionPageModule)
  },  {
    path: 'multiplicadora',
    loadChildren: () => import('./multiplicadora/multiplicadora.module').then( m => m.MultiplicadoraPageModule)
  },
  {
    path: 'numeromayor',
    loadChildren: () => import('./numeromayor/numeromayor.module').then( m => m.NumeromayorPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
