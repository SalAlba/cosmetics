import { Component, OnInit } from '@angular/core';

import { Product } from "../../../../shared/models/product.model";
import { User } from "../../../../shared/models/user.model";
import { Buyer } from "../../../../shared/models/buyer.model";
import { BasketService } from "../../../../shared/providers/basket.service";
import { LinksService } from "../../../../shared/providers/links/links.service";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  products: Product[];
  buyer: Buyer;
  productCart: FormGroup;

  constructor(
    private basketService: BasketService,
    private linksService: LinksService
  ) { }

  ngOnInit(): void {
    this.products = this.getBasketProducts();
    this.buyer = this.getBasketBuyer();
    // this.createForm();
  }

  createFormControls() {
    let controls = {}
    this.products.forEach((p, i) => {
      controls['' + i] = new FormControl(p.quantity);
    });
    return controls;
  }

  createForm() {
    this.productCart = new FormGroup(this.createFormControls());
  }

  getBasketProducts(): Product[] {
    return this.basketService.getBasketProducts();
  }

  getBasketBuyer(): Buyer {
    return this.basketService.getBasketBuyer();
  }

  getTotalPrice() {
    return this.basketService.getTotalPrice();
  }

  getNumberOfProducts() {
    return this.basketService.getNumberOfProducts();
  }

  removeFromBasket(product: Product) {
    this.basketService.removeFromBasket(product);
  }

  pay() {
    this.basketService.pay();
  }

  getUrl(product: Product) {
    return this.linksService.getProductDetailUrl(product);
  }
}
