import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// modules ...
// import { NgxGalleryModule } from 'ngx-gallery';
import { ProductsRoutingModule } from "./products-routing.module";

// components ...
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    // NgxGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
