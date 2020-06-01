import { Injectable } from '@angular/core';

import { Product } from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor() { }

  public getProductDetailUrl(product: Product) {
    return '/product/' + product.link;
  }
}
