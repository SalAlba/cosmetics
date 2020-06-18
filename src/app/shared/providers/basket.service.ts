import { Injectable } from '@angular/core';

import { Product } from "../models/product.model";
// import { User } from "../models/user.model";
import { Buyer } from "../models/buyer.model";
import { Payment } from "../models/payment.model";
// import { BasketProduct } from "../models/basket.model";
import { BASKET, BASKET_ } from "../mock/mock-basket";

import { PaymentsService } from "./payments/payments.service";
import { EmailService } from "./email/email.service";

// import { browser, by, element } from 'protractor';
import { environment } from '../../../environments/environment';

import { COUNTRIES } from "../../shared/mock/mock-country";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private NOTIFY_URL = environment.notifyUrl;
  currentBasket: Product[] = BASKET;
  basket_ = BASKET_;

  constructor(private paymentsService: PaymentsService, private emailService: EmailService) { }

  getBasketProducts(): Product[] {
    return Object.values(this.basket_.products);
  }

  getBasketBuyer(): Buyer {
    return this.basket_.buyer;
  }


  getBasketById(_id: string) {
    if (_id in this.basket_) {
      return this.basket_[_id]
    }
    return { quantity: 0 };
  }

  getShippingCost(): number {
    if (Object.keys(this.basket_.products).length == 0 && this.basket_.products.constructor === Object) {
      return 0.;
    }
    let pcs = (Number)(Object.values(this.basket_.products).reduce((a: any, b: any) => a + (1 * b.quantity || 0), 0));
    let basciPCS = 20.;
    let basciPCSCost = 25.;
    if (pcs <= 20.) {
      return 25.;
    }

    pcs = Math.ceil((pcs - basciPCS) / 10.);
    return basciPCSCost + basciPCSCost * pcs;
  }

  getTotalPrice(): number {
    // return this.currentBasket.reduce((a, b) => a + (b.unitPrice || 0), 0);
    if (Object.keys(this.basket_.products).length == 0 && this.basket_.products.constructor === Object) {
      return 0. + this.getShippingCost();
    }
    return (Number)(Object.values(this.basket_.products).reduce((a: any, b: any) => a + (b.unitPrice * b.quantity || 0), 0)) + this.getShippingCost();
  }

  getNumberOfProducts() {
    return Object.keys(this.basket_.products).length;
  }

  pay() {
    let basketProduct = this.getBasketForPayment();
    console.log('====> Start Email <=====');
    this.emailService.sendOrderEmail(basketProduct);
    console.log('====> End Email <=====');
    console.log('====> Start Pay <=====');
    this.paymentsService.createNewOrder(basketProduct).subscribe(d => {
      console.log(d);
      this.navigateTo(d['redirectUri']);
    });
    console.log('====> End Pay <=====');
  }

  getBasketForPayment(): Payment {
    let d = `salem-ID-${new Date().getMonth()}-${new Date().getDay()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;
    let payment = {
      id: d,
      notifyUrl: `${this.NOTIFY_URL}`,
      continueUrl: `${this.NOTIFY_URL}/successfully-end-transaction/${d}`,
      mapper: 'payu',
      description: "test js description",
      // currencyCode: "USD",
      products: this.getBasketProducts(),
      buyer: this.getBasketBuyer(),
    }

    // # TODO  .... 
    for (let i = 0; i < payment.products.length; i++) {
      payment.products[i]['name'] = payment.products[i]['title'];
      // delete payment.products[i].title;
    }
    return payment;
  }

  addProductToBasket(product: Product) {
    console.log('===> Add to basket <===');
    if (product._id in this.basket_.products) {
      this.basket_.products[product._id].quantity += 1;
    } else {
      product.quantity = 1;
      this.basket_.products[product._id] = product;
    }
    console.log(this.basket_.products);
  }

  removeFromBasket(product: Product) {
    console.log('===> remove from basket <===');
    this.basket_.products[product._id].quantity = 0;
    delete this.basket_.products[product._id];
    console.log(this.basket_.products);
  }

  navigateTo(baseUrl: string) {
    window.location.href = baseUrl;
  }

  get_list_of_countries() {
    return COUNTRIES;
  }
}
