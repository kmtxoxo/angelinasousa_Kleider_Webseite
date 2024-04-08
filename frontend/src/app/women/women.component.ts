import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  products: any[];
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.products = [];
    this.productService.getProductsByKategorie('Frauen').then((products) => {
      let tmp = [];
      let i;
      for (i = 0; i < products.length; i++) {
        if ( (i % 4) === 0 && i !== 0) {
          this.products.push(tmp);
          tmp = [];
        }
        tmp.push(products[i]);
      }
      if ((i % 4) !== 0 ) {
        this.products.push(tmp);
      }
    }).catch((status) => {
      // No products found
      // console.log(status.error.message);
    });
  }

}
