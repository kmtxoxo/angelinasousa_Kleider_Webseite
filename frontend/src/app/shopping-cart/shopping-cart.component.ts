import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../service/shopping-cart.service';
import {Product} from '../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[];
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.products = this.shoppingCartService.getCartProducts();
  }
  OnRemoveClicked(product) {
    console.log('Remove Item');
  }
}
