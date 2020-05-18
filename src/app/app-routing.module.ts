import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'home',
    // loadChildren: './modules/home/home.module#HomeModule'
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(mod => mod.ProductsModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./modules/basket/basket.module').then(mod => mod.BasketModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./shared/shared.module').then(mod => mod.SharedModule)
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// https://stackblitz.com/angular/aqqyljyojye
