import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { Observable } from 'rxjs';

import { ProductsService } from "../../../../core/http/products/products.service";
import { BasketService } from "../../../../shared/providers/basket.service";
import { Product } from "../../../../shared/models/product.model";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // _selectedProduct: Observable<Product>;
  product_: Product;
  // ...
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];
  // ...
  // productCart: FormGroup;
  // productName: FormControl;
  // quantity: FormControl;

  constructor(
    private route: ActivatedRoute,
    private basketService: BasketService,
    private productsService: ProductsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getProduct();
    // this.setGallery();
    // this.createFormControls();
    // this.createForm();
  }


  getProduct() {
    this.route.params.subscribe(d => {
      this.productsService.getProductByLink(d.link).subscribe(p => {
        this.product_ = p;
      });
    });
  }

  // createFormControls() {
  //   // this.quantity = new FormControl(1);
  //   // this.productName = new FormControl('xxxx');
  // }
  // createForm() {
  //   this.productCart = new FormGroup({
  //     productName: new FormControl(),
  //     quantity: new FormControl(this.product_.quantity)
  //   });
  // }


  addToBasket() {
    this.basketService.addProductToBasket(this.product_);
  }

  increaseQuantity() {
    // this._selectedProduct.subscribe(d => {
    //   d.quantity += 1;
    // });
  }

  decreaseQuantity() {
    // this._selectedProduct.subscribe(d => {
    //   if (d.quantity >= 1) {
    //     d.quantity -= 1;
    //   }
    // });
  }


  sanitizeHTML(data:string){
    return this.sanitizer.bypassSecurityTrustHtml(data);
  }


}
