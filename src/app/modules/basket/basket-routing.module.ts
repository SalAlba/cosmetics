import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketComponent } from './components/basket/basket.component';
import { SuccessfullyEndTransactionComponent } from "./components/successfully-end-transaction/successfully-end-transaction.component";

const routes: Routes = [
  {
    path: 'basket',
    component: BasketComponent,
  },
  {
    path: 'successfully-end-transaction/:_id',
    component: SuccessfullyEndTransactionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BasketRoutingModule { }
