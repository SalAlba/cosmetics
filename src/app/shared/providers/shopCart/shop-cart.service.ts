import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cart, CartProduct } from "@shared/models/cart.model";
import { Product } from "@shared/models/product.model";
import { Payment } from "@shared/models/payment.model";

import { PaymentsService } from "@shared/providers/payments/payments.service";
import { EmailService } from "@shared/providers/email/email.service";
import { environment } from '../../../../environments/environment';

// import { browser, by, element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  private NOTIFY_URL = environment.notifyUrl;
  cart: Cart = {
    product: new Map<string, CartProduct>(),
    buyer: {}
  };

  constructor(
    private paymentsService: PaymentsService,
    private emailService: EmailService,
    private router: Router
  ) {
  }

  addProduct(product: CartProduct) {
    this.cart.product.set(product._id, product);
    this.setCartToLocalStorage();
  }

  getProduct(_id: string): CartProduct {
    return this.cart.product.get(_id);
  }

  getProductQuantity(_id: string): number {
    // if (this.cart.product.has(_id))
    //   return this.cart.product.get(_id)['quantity'];
    // return 0;

    let cart = this.getCartFromLocalStorage();
    if (cart.product.has(_id)) {
      console.log(`>>>>>>>>>>>>>>>>>> yes there are product in cart with _id ${_id}`);
      return cart.product.get(_id)['quantity'];
    }
    console.log(`>>>>>>>>>>>>>>>>>> no product fond in cart with _id ${_id} `);
    return 0;
  }

  getNumberOfProducts(): number {
    return this.getProductFromLocalStorage().size;
  }

  getShippingCost(): number {
    if (this.getNumberOfProducts() < 1) {
      return 0.;
    }
    let pcs = (Number)(this.getProductsAsArray().reduce((a: any, b: any) => a + (1 * b.quantity || 0), 0));
    let basicPCS = 20.;
    let basicPCSCost = 25.;
    if (pcs <= 20.) {
      return 25.;
    }

    pcs = Math.ceil((pcs - basicPCS) / 10.);
    return basicPCSCost + basicPCSCost * pcs;
  }

  getTotalPrice(): number {
    // return this.currentBasket.reduce((a, b) => a + (b.unitPrice || 0), 0);
    if (this.getNumberOfProducts() < 1) {
      return 0.;
    }
    return (Number)(this.getProductsAsArray().reduce((a: any, b: any) => a + (b.unitPrice * b.quantity || 0), 0)) + this.getShippingCost();
  }

  setCartToLocalStorage() {
    // TODO ...
    // localStorage.clear();
    localStorage.products = JSON.stringify(Array.from(this.cart.product.entries()));
    localStorage.buyer = JSON.stringify(this.cart.buyer);
  }

  getCartFromLocalStorage(): Cart {
    // https://stackoverflow.com/questions/28918232/how-do-i-persist-a-es6-map-in-localstorage-or-elsewhere
    // console.log(JSON.parse(localStorage.products))

    // let products = new Map<string, CartProduct>();
    // JSON.parse(localStorage.products).forEach((d: any) => products.set(d[0], d[1]))
    // let pro =  new Map<string, CartProduct>(JSON.parse(localStorage.products));

    return {
      product: this.getProductFromLocalStorage(),
      buyer: this.getBuyerFromLocalStorage()
    }
  }

  getProductFromLocalStorage() {
    if ('products' in localStorage) {
      // return new Map<string, CartProduct>(JSON.parse(localStorage.products));
      return this.cart.product;
    }
    return new Map<string, CartProduct>();
  }

  getBuyerFromLocalStorage() {
    if ('buyer' in localStorage) {
      // return JSON.parse(localStorage.buyer);
      return this.cart.buyer;
    }
    return {};
  }

  getProductsAsArray(): Product[] {
    let products: Product[] = [];
    for (let [key, value] of this.getProductFromLocalStorage().entries()) {
      products.push(value);
    }
    return products;
  }



  pay(transactionId: string) {
    let basketProduct = this.getBasketForPayment(transactionId);
    console.log('====> Start Email <=====');
    this.emailService.sendOrderEmail(basketProduct);
    console.log('====> End Email <=====');
    console.log('====> Start Pay <=====');

    let totalPrice = this.getTotalPrice();
    this.restCart();
    this.router.navigate([`/successfully-end-transaction/${transactionId}`], { queryParams: { totalPrice: totalPrice } });
    // this.paymentsService.createNewOrder(basketProduct).subscribe(
    //   d => {
    //     console.log(d);
    //     this.router.navigate([`/successfully-end-transaction/${d['orderId']}`], { queryParams: { totalPrice: this.getTotalPrice() } });
    //   },
    //   e => {
    //     console.log('Error payments > ', e);
    //   }
    // );
    console.log('====> End Pay <=====');
  }

  getBasketForPayment(transactionId: string): Payment {
    let payment = {
      id: transactionId,
      notifyUrl: `${this.NOTIFY_URL}`,
      continueUrl: `${this.NOTIFY_URL}/successfully-end-transaction/${transactionId}`,
      mapper: 'payu',
      description: "test js description",
      // currencyCode: "USD",
      products: this.getProductsAsArray(),
      buyer: this.getBuyerFromLocalStorage(),
    }

    // # TODO  .... 
    for (let i = 0; i < payment.products.length; i++) {
      payment.products[i]['name'] = payment.products[i]['title'];
      // delete payment.products[i].title;
    }
    return payment;
  }

  restCart() {
    this.cart = {
      product: new Map<string, CartProduct>(),
      buyer: {}
    };
    localStorage.clear();
  }

}
