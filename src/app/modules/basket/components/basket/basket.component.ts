import { Component, OnInit } from '@angular/core';
import { ShopCartService } from "@shared/providers/shopCart/shop-cart.service";


import { Product } from "@shared/models/product.model";
import { Buyer } from "@shared/models/buyer.model";
import { BasketService } from "@shared/providers/basket.service";
import { LinksService } from "@shared/providers/links/links.service";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  products: Product[];
  buyer: Buyer;
  productCart: FormGroup;
  countries = [];
  states = [];

  constructor(
    private basketService: BasketService,
    private linksService: LinksService,
    private router: Router,
    private shopCartService: ShopCartService
  ) { }

  ngOnInit(): void {
    // TODO ...
    // this.products = this.getBasketProducts();
    // this.buyer = this.getBasketBuyer();

    // TODO ...
    this.products = this.shopCartService.getProductsAsArray();
    this.buyer = this.shopCartService.getBuyerFromLocalStorage();
    console.log(this.products);

    // TODO NO NEED ...
    // this.countries = this.basketService.get_list_of_countries();
    // this.buyer['_selectedCountry'] = {
    //   name: '',
    //   state: []
    // }
  }

  createFormControls() {
    let controls = {}
    this.products.forEach((p, i) => {
      controls['' + i] = new FormControl(p.quantity);
    });
    return controls;
  }

  createForm() {
    // this.productCart = new FormGroup(this.createFormControls());
  }

  getBasketProducts(): Product[] {
    // TODO ...
    // return this.basketService.getBasketProducts();
    return this.products;
  }

  getBasketBuyer(): Buyer {
    // TODO ...
    // return this.basketService.getBasketBuyer();
    return this.buyer;
  }

  getShippingCost(): number {
    // TODO ...
    // return this.basketService.getShippingCost();
    return this.shopCartService.getShippingCost();
  }

  getTotalPrice(): number {
    // TODO ...
    // return this.basketService.getTotalPrice();
    return this.shopCartService.getTotalPrice();
  }

  getNumberOfProducts() {
    // TODO ..
    // return this.basketService.getNumberOfProducts();
    return this.shopCartService.getNumberOfProducts();
  }

  removeFromBasket(product: Product) {
    this.basketService.removeFromBasket(product);
  }

  pay() {
    if (this.shopCartService.getNumberOfProducts() < 1) {
      alert('No product to pay 😄')
      return;
    }
    this.router.navigate(['/basket-summary']);
    // this.basketService.pay();
  }

  getUrl(product: Product) {
    return this.linksService.getProductDetailUrl(product);
  }

  onSelectCountry() {
    this.states = this.countries.find(d => d.name == this.buyer.country).states;
  }
}
