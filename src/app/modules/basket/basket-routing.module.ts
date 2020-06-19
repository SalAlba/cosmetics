import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketComponent } from './components/basket/basket.component';
import { SummaryComponent } from "./components/summary/summary.component";
import { SuccessfullyEndTransactionComponent } from "./components/successfully-end-transaction/successfully-end-transaction.component";

const routes: Routes = [
  {
    path: 'basket',
    component: BasketComponent,
  },
  {
    path: 'basket-summary',
    component: SummaryComponent,
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
