import { Injectable } from '@angular/core';

import { Product } from "../models/product.model";
import { Payment } from "../models/payment.model";
import { BASKET } from "../mock/mock-basket";

import { PaymentsService } from "./payments/payments.service";

import { browser, by, element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  curentBasket: Product[] = BASKET;

  constructor(private paymentsService: PaymentsService) { }

  getTotalPrice() {
    return this.curentBasket.reduce((a, b) => a + (b.unitPrice || 0), 0);
  }

  pay() {
    console.log('====> Start Pay <=====');
    let response = this.paymentsService.createNewOrder(this.getBaseketForPayment());
    response.subscribe(d => {
      console.log(d);
      this.navigateTo(d['redirectUri']);
    });
    console.log('====> End Pay <=====');
  }

  getBaseketForPayment(): Payment {
    let payment = {
      notifyUrl: "http://salem.cktech.eu",
      description: "test js description",
      products: this.curentBasket,
    }

    // # TODO  .... 
    for (let i = 0; i < payment.products.length; i++) {
      payment.products[i]['name'] = payment.products[i]['title'];
      // delete payment.products[i].title;
    }
    return payment;
  }

  navigateTo(baseUrl) {
    window.location.href = baseUrl;
  }
}
