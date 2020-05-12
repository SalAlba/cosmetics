import { Component, OnInit } from '@angular/core';

import { Product } from "../../../../shared/models/product.model";
import { BasketService } from "../../../../shared/providers/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  getBasket(): Product[] {
    return this.basketService.curentBasket;
  }

  getTotalPrice(){
    return this.basketService.getTotalPrice();
  }

  getNumberOfProducts(){
    return this.basketService.curentBasket.length;
  }

  pay(){
    console.log('====> Pay <=====');
    this.basketService.pay();
  }

}
