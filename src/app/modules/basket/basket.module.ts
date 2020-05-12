import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules ...
import { CoreModule } from '../../core/core.module';
import {SharedModule} from '../../shared/shared.module';
import { BasketRoutingModule } from './basket-routing.module';

// components ...
import { BasketComponent } from './components/basket/basket.component';




@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    BasketRoutingModule
  ],
  exports: [
  ]
})
export class BasketModule { }
