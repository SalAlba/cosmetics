import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketComponent } from './components/basket/basket.component';

const routes: Routes = [
    {
        path: 'basket',
        component: BasketComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BasketRoutingModule { }
