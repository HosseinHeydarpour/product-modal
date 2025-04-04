import { Component, inject, OnInit } from '@angular/core';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';

import { ProductService } from '../product.service';
import { Product } from '../product.model';

const RANDOM_ID = Math.floor(Math.random() * 10);

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [PrimaryBtnComponent],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.scss',
})
export class ShoppingCardComponent implements OnInit {
  productService = inject(ProductService);
  product!: Product;
  ngOnInit(): void {
    this.productService.getProduct(RANDOM_ID).subscribe({
      next: (res) => {
        this.product = res;
        console.log(this.product);
      },
    });
  }
}
