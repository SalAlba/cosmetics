import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from "../../../shared/models/product.model";

import { PRODUCTS } from "../../../shared/mock/mock-product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASIC_URL = environment.api;

  private _products = new BehaviorSubject<Product[]>(null);
  private _selectedProduct = new BehaviorSubject<Product>(null);

  constructor(private http: HttpClient) { }


  /*** GETTERS AND SETTERS*/

  getProductsSubject(): Observable<any> {
    return this._products.asObservable();
  }

  getSelectedProductSubject(): Observable<any> {
    return this._selectedProduct.asObservable();
  }

  setSelectedProduct(gr: Product) {
    this._selectedProduct.next(gr);
  }

  /*** HTTP METHODS */
  public getAllBestSellerProducts(): Observable<Product[]> {
    this._products.next(PRODUCTS)
    return this._products;
    // return this.http.get<Product[]>(`${this.BASIC_URL}/products/bestseller`);
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASIC_URL}/products/`);
  }

  public getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.BASIC_URL}/products/${id}`);
  }
}
