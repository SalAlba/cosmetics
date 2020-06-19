import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// modules ...
import { CoreModule } from '../../core/core.module';
import {SharedModule} from '../../shared/shared.module';
import { BasketRoutingModule } from './basket-routing.module';

// components ...
import { BasketComponent } from './components/basket/basket.component';
import { SuccessfullyEndTransactionComponent } from './components/successfully-end-transaction/successfully-end-transaction.component';
import { SummaryComponent } from './components/summary/summary.component';




@NgModule({
  declarations: [BasketComponent, SuccessfullyEndTransactionComponent, SummaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    BasketRoutingModule
  ],
  exports: [
  ]
})
export class BasketModule { }
