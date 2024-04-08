import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ShoppingCartService} from '../service/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  anzahl: number;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.anzahl = 0;
    this.anzahl = this.shoppingCartService.anzahl;
    this.shoppingCartService.getProductAnzahl().subscribe((anzahl) => {
      this.anzahl = anzahl;
    });
  }

}
