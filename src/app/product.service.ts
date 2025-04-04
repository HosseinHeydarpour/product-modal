import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);
  constructor() {}

  get products() {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProduct(id: number) {
    return this.httpClient.get<Product>(
      `https://fakestoreapi.com/products/${id}`
    );
  }
}
