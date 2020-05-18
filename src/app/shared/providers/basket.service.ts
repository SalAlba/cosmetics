import { Injectable } from '@angular/core';

import { Product } from "../models/product.model";
import { Payment } from "../models/payment.model";
import { BasketProduct } from "../models/basket.model";
import { BASKET, BASKET_ } from "../mock/mock-basket";

import { PaymentsService } from "./payments/payments.service";

import { browser, by, element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  currentBasket: Product[] = BASKET;
  basket_ = BASKET_;

  constructor(private paymentsService: PaymentsService) { }

  getBasket() {
    return this.basket_;
  }

  getBasketById(_id: string) {
    if (_id in this.basket_) {
      return this.basket_[_id]
    }
    return { quantity: 0 };
  }

  getTotalPrice() {
    // return this.currentBasket.reduce((a, b) => a + (b.unitPrice || 0), 0);
    return Object.values(this.basket_).reduce((a: any, b: any) => a + (b.unitPrice || 0), 0);
  }

  getNumberOfProducts() {
    return Object.values(this.basket_).length;
  }

  pay() {
    console.log('====> Start Pay <=====');
    let response = this.paymentsService.createNewOrder(this.getBasketForPayment());
    response.subscribe(d => {
      console.log(d);
      this.navigateTo(d['redirectUri']);
    });
    console.log('====> End Pay <=====');
  }

  getBasketForPayment(): Payment {
    let payment = {
      notifyUrl: "http://salem.cktech.eu",
      description: "test js description",
      products: this.currentBasket,
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
    if (product._id in this.basket_) {
      this.basket_[product._id].quantity += 1;
    } else {
      this.basket_[product._id] = product;
    }
    console.log(this.basket_)
  }

  navigateTo(baseUrl) {
    window.location.href = baseUrl;
  }
}
