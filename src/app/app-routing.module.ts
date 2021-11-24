import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/login/login-routing.module').then(m => m.LoginRoutingModule),
    data: {preload: true}
  },
  {
    path: '**',
    loadChildren: () => import('./components/login/login-routing.module').then(m => m.LoginRoutingModule),
    data: {preload: true}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
