import { Component, OnInit } from '@angular/core';
import { Product } from "@shared/models/product.model";
import { Buyer } from "@shared/models/buyer.model";
import { BasketService } from "@shared/providers/basket.service";
import { ShopCartService } from "@shared/providers/shopCart/shop-cart.service";

import { LinksService } from "@shared/providers/links/links.service";
import { environment } from "../../../../../environments/environment";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  products: Product[];
  buyer: Buyer;
  transactionId: string;
  accountNumber = environment.accountNumber;

  constructor(
    private shopCartService: ShopCartService,
    private basketService: BasketService,
    private linksService: LinksService,
  ) { }

  ngOnInit(): void {
    this.products = this.getBasketProducts();
    this.buyer = this.getBasketBuyer();
    // this.transactionId = `Profhilo-${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;
    this.transactionId = uuidv4().split('-')[0];
  }

  getBasketProducts(): Product[] {
    // return this.basketService.getBasketProducts();
    return this.shopCartService.getProductsAsArray();
  }

  getBasketBuyer(): Buyer {
    // return this.basketService.getBasketBuyer();
    return this.shopCartService.getBuyerFromLocalStorage();
  }

  getUrl(product: Product) {
    return this.linksService.getProductDetailUrl(product);
  }

  getShippingCost(): number {
    // return this.basketService.getShippingCost();
    return this.shopCartService.getShippingCost();
  }

  getTotalPrice(): number {
    // return this.basketService.getTotalPrice();
    return this.shopCartService.getTotalPrice();
  }

  pay() {
    // this.basketService.pay(this.transactionId);
    if (this.shopCartService.getNumberOfProducts() < 1) {
      alert('No product to pay 😄')
      return;
    }
    this.shopCartService.pay(this.transactionId);
  }
}
