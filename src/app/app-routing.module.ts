import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)},
  {path: 'faq', loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
