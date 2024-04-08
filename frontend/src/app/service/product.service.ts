import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  baseUrl = 'http://localhost/api/product/read.php';

  async getProducts() {
    const result = await this.httpClient.get<any>(this.baseUrl).toPromise();
    return result.data;
  }

  async getProductsByNameAndKategorie(name: string, kategorie: string) {
    const result = await this.httpClient.get<any>(this.baseUrl + '?name=' + name + '&kategorie=' + kategorie).toPromise();
    return result.data;
  }

  async getProductsByKategorie(kategorie: string) {
    const result = await this.httpClient.get<any>(this.baseUrl + '?kategorie=' + kategorie).toPromise();
    return result.data;
  }
}
