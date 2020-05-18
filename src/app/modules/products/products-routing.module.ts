import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from "./components/product/product.component";

const routes: Routes = [
  {
      path: 'products',
      component: ProductsComponent,
  },
  {
      path: 'product/:link',
      component: ProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
