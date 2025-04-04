import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);
  constructor() {}

  get products() {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
}
