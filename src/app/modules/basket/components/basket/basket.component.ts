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

  billingAddressForm: FormGroup;
  disabledAll = false;
  errorMessage = ''
  noProductsMsg = ''

  constructor(
    private formBuilder: FormBuilder,
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
    console.log(this.buyer);

    // ...
    if (this.shopCartService.getNumberOfProducts() < 1) {
      // alert('No product to pay 😄')
      this.noProductsMsg = 'Your shopping cart is empty 😥'
      this.disabledAll = true;
    }

    // ...
    this.createForms();
  }

  createForms() {
    this.billingAddressForm = this.createBillingAddressForm();
    this.disableControls();
  }

  createBillingAddressForm() {
    return this.formBuilder.group({
      firstName: [
        this.buyer.firstName,
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      lastName: [
        this.buyer.lastName,
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      email: [
        this.buyer.email,
        [
          Validators.required,
          // tslint:disable-next-line:max-line-length
          Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
        ]
      ],
      phone: [
        this.buyer.phone,
        [
          Validators.required,
        ]
      ],
      firstAddress: [
        this.buyer.firstAddress,
        [
          Validators.required,
        ]
      ],
      country: [
        this.buyer.country,
        [
          Validators.required,
        ]
      ],
      state: [
        this.buyer.state,
        [
          Validators.required,
        ]
      ],
      zip: [
        this.buyer.zip,
        [
          Validators.required,
        ]
      ],
      description: [
        this.buyer.description,
        []
      ]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.billingAddressForm.controls;
  }

  summary() {
    // stop here if form is invalid
    if (this.billingAddressForm.invalid) {
      this.errorMessage = 'Please check your information';
      return;
    }

    this.errorMessage = ''
    this.shopCartService.addBuyer(this.billingAddressForm.value)
    this.router.navigate(['/basket-summary']);
    // this.basketService.pay();
  }

  disableControls() {
    if (this.disabledAll) {
      Object.keys(this.f).forEach(k => this.f[k].disable());
    }
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

  getUrl(product: Product) {
    return this.linksService.getProductDetailUrl(product);
  }

  onSelectCountry() {
    this.states = this.countries.find(d => d.name == this.buyer.country).states;
  }

  checkBillingAddress() {
    alert(this.buyer.firstName)
    if (this.buyer.firstName) {
      this.errorMessage = 'Please add your first name'
      return false;
    }
    return true;
  }
}
