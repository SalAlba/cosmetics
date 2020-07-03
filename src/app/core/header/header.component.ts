import { Component, OnInit } from '@angular/core';

import { BasketService } from "../../shared/providers/basket.service";
import { ShopCartService } from "@shared/providers/shopCart/shop-cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private basketService: BasketService, private shopCartService: ShopCartService) { }

  ngOnInit() {
  }


  getNumberOfProducts() {
    // return this.basketService.getNumberOfProducts();
    return this.shopCartService.getNumberOfProducts();
  }
}
