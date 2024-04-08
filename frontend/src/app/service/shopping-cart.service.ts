import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cart: Product[];
  anzahl: number;
  preis: number;

  anzahlChange: Subject<number> = new Subject<number>();

  constructor() {
    this.cart = [];
    this.anzahl = 0;
    this.preis = 0;
    this.init_cart();
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.anzahl++;
    this.anzahlChange.next(this.anzahl);
    this.saveToLocalStorage();
  }

  removeFromCart(artikelnummer: number) { // artikelnummer entfernen? vlt 1 artikelnummer = 1 artikel in verschiedenen groessen
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].artikelnummer === artikelnummer) {
        this.cart.splice(i, 1);
      }
    }
    this.anzahl--;
    this.anzahlChange.next(this.anzahl);
    this.saveToLocalStorage();
  }

  getCartProducts() {
    return this.cart;
  }

  getProductAnzahl() {
    return this.anzahlChange;
  }

  getCartProductsGrouped() {

  }

  /* Localstorage Functions */
  loadFromLocalStorage() {

    if (localStorage.getItem('produkte') === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem('produkte'));
    }
  }

  async saveToLocalStorage() {
    localStorage.produkte = JSON.stringify(this.cart);
  }

  init_cart() {

    // Check if expired
    const expiretime = new Date(JSON.parse(localStorage.getItem('expiretime')));
    if (expiretime) {
      if (expiretime < new Date()) {
        localStorage.clear();
      }
    }

    // Set epiretime
    const setExpireTime = new Date();
    setExpireTime.setMinutes(setExpireTime.getMinutes() + 45); // 45Min from now
    localStorage.setItem('expiretime', JSON.stringify(setExpireTime));

    this.cart = this.loadFromLocalStorage();

    // Update Anzahl and Preis
    this.anzahl = this.cart.length; // Später Vlt ändern da produkteanzahl haben
    this.anzahlChange.next(this.anzahl);
  }

}
