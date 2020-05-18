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
    return this.basketService.currentBasket;
  }

  getTotalPrice(){
    return this.basketService.getTotalPrice();
  }

  getNumberOfProducts(){
    return this.basketService.getNumberOfProducts();
  }

  pay(){
    console.log('====> Pay <=====');
    this.basketService.pay();
  }

}
