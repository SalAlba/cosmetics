import { Component, OnInit } from '@angular/core';

import { BasketService } from "../../shared/providers/basket.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  ngOnInit() {
  }


  getNumberOfProducts() {
    return this.basketService.getNumberOfProducts();
  }
}
