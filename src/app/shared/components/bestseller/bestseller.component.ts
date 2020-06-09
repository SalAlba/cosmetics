import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';


// // services ...
import { ProductsService } from "../../../core/http/products/products.service";
import { Product } from '../../models/product.model';

// // models ...
// import { Post } from '../../../../shared/models/post.model';
// import { Title, Meta } from '@angular/platform-browser';
// import { DESCRITPTION } from '../../../../shared/mock/mock-desc';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.scss']
})
export class BestsellerComponent implements OnInit {

  // POSTES_BASIC_URL = '/postes';
  // products: Observable<Product[]>;
  products: Product[];

  constructor(private productsService: ProductsService) {
    this.productsService.getAllBestSellerProducts().subscribe(d => {
      // console.log(d)
      this.products = d
    });
  }

  ngOnInit(): void {
    //   this.postes = this.postesService.get_all_postes();
    //   this.postesService.get_all_postes().subscribe(d => console.log(d));
    //   this.title.setTitle('List of all postes');
    //   this.meta.addTag({
    //     name: 'description',
    //     content: DESCRITPTION
    //     // content: d.description
    //   });
  }


  public show(product: Product) {
    this.productsService.setSelectedProduct(product);
    // this.router.navigate([this.POSTES_BASIC_URL, post.link]);
    // return [this.POSTES_BASIC_URL, post.link]
  }

  public showDiscount(product: Product) {
    if (product.discount > 0) {
      return false
    }
    return true;
  }

  public countPriceUsingDiscount(product: Product) {
    return product.unitPrice - (product.discount / 100);
  }

  public getUrl(product: Product) {
    this.productsService.setSelectedProduct(product);
    return '/product/' + product.link;
  }
}
