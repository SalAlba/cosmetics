import { Component, OnInit } from '@angular/core';
import { Product } from "../../../../shared/models/product.model";
import { Buyer } from "../../../../shared/models/buyer.model";
import { BasketService } from "../../../../shared/providers/basket.service";
import { LinksService } from "../../../../shared/providers/links/links.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  products: Product[];
  buyer: Buyer;

  constructor(
    private basketService: BasketService,
    private linksService: LinksService,
  ) { }

  ngOnInit(): void {
    this.products = this.getBasketProducts();
    this.buyer = this.getBasketBuyer();
  }

  getBasketProducts(): Product[] {
    return this.basketService.getBasketProducts();
  }

  getBasketBuyer(): Buyer {
    return this.basketService.getBasketBuyer();
  }

  getUrl(product: Product) {
    return this.linksService.getProductDetailUrl(product);
  }

  getShippingCost(): number {
    return this.basketService.getShippingCost();
  }

  getTotalPrice(): number {
    return this.basketService.getTotalPrice();
  }

  pay() {
    this.basketService.pay();
  }
}
