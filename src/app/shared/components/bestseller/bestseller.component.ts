import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';


// // services ...
import { ProductsService } from "../../../core/http/products/products.service";

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
  // postes: Observable<Post[]>;

  constructor(private productsService: ProductsService) { }

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


  // public show(post: Post) {
  //   console.log('SELECTED POST : ', post);
  //   this.postesService.set_selected_poste(post);
  //   this.router.navigate([this.POSTES_BASIC_URL, post.link]);
  //   // return [this.POSTES_BASIC_URL, post.link]
  // }

}
