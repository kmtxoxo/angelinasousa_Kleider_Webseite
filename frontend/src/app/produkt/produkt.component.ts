import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/product';
import {ShoppingCartService} from '../service/shopping-cart.service';

declare var instgrm;

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.scss']
})
export class ProduktComponent implements OnInit {

  produkte: Product[];
  selectedProdcutIndex: number;
  produktKategorie: string;
  currentImage: string;
  constructor(private productService: ProductService, private router: Router,
              private route: ActivatedRoute,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.produkte = [];
    this.selectedProdcutIndex = 0;
    this.produktKategorie = this.router.url.substring(1, this.router.url.lastIndexOf('/'));
    switch (this.produktKategorie) {
      case 'kids': this.produktKategorie = 'Kinder'; break;
      case 'women': this.produktKategorie = 'Frauen'; break;
      case 'soum': this.produktKategorie = 'Soum';  break;
    }

    this.route.paramMap.subscribe((params) => {
      const produktName = params.get('produktName');
      this.productService.getProductsByNameAndKategorie(produktName, this.produktKategorie).then((produkte) => {
         this.produkte = produkte;
         this.currentImage = this.produkte[this.selectedProdcutIndex].hauptbild;
      }).catch((status) => {
        // Product not Found
      });
    });
    instgrm.Embeds.process();
  }
  OnAddToCartClicked() {
    this.shoppingCartService.addToCart(this.produkte[this.selectedProdcutIndex]);
  }
  OnChangePictureClicked(picture: string) {
    switch (picture) {
      case 'thumbnail1': this.currentImage = this.produkte[this.selectedProdcutIndex].thumbnail1; break;
      case 'thumbnail2': this.currentImage = this.produkte[this.selectedProdcutIndex].thumbnail2; break;
      case 'hauptbild': this.currentImage = this.produkte[this.selectedProdcutIndex].hauptbild; break;
    }
  }

  onChangeGroesse(index) {
    this.selectedProdcutIndex = index;
  }
}
