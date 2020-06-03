import { Injectable } from '@angular/core';

import { Product } from "../models/product.model";
import { User } from "../models/user.model";
import { Buyer } from "../models/buyer.model";
import { Payment } from "../models/payment.model";
import { BasketProduct } from "../models/basket.model";
import { BASKET, BASKET_ } from "../mock/mock-basket";

import { PaymentsService } from "./payments/payments.service";

import { browser, by, element } from 'protractor';
import { environment } from '../../../environments/environment';

import { COUNTRIES } from "../../shared/mock/mock-country";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private NOTIFY_URL = environment.notifyUrl;
  currentBasket: Product[] = BASKET;
  basket_ = BASKET_;

  constructor(private paymentsService: PaymentsService) { }

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

  getTotalPrice() {
    // return this.currentBasket.reduce((a, b) => a + (b.unitPrice || 0), 0);
    return Object.values(this.basket_.products).reduce((a: any, b: any) => a + (b.unitPrice * b.quantity || 0), 0);
  }

  getNumberOfProducts() {
    return Object.values(this.basket_.products).length;
  }

  pay() {
    console.log('====> Start Pay <=====');
    this.paymentsService.createNewOrder(this.getBasketForPayment()).subscribe(d => {
      console.log(d);
      this.navigateTo(d['redirectUri']);
    });
    console.log('====> End Pay <=====');
  }

  getBasketForPayment(): Payment {
    let d = `salem-ID-${new Date().getDay()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;
    let payment = {
      notifyUrl: `${this.NOTIFY_URL}`,
      continueUrl: `${this.NOTIFY_URL}/successfully-end-transaction/${d}`,
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

  get_list_of_countries(){
    return COUNTRIES;
  }
}
