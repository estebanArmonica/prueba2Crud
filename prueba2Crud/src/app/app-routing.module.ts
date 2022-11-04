import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./paginas/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./paginas/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./paginas/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./paginas/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./paginas/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./paginas/listar/listar.module').then( m => m.ListarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
