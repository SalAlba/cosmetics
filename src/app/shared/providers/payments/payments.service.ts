import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from "../../../shared/models/product.model";
import { Payment } from "../../../shared/models/payment.model";


@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private BASIC_URL = environment.api;
  private CONTEXT = 'payu'

  // private _products = new BehaviorSubject<Product[]>(null);
  // private _selectedProduct = new BehaviorSubject<Product>(null);

  constructor(private http: HttpClient) { }


  /*** HTTP METHODS */
  public createNewOrder(basket: Payment): Observable<any> {
    return this.http.post<Payment>(
      `${this.BASIC_URL}/payments/${this.CONTEXT}`,
      basket
    );
  }
}
