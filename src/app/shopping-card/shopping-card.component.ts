import { Component, inject, OnInit } from '@angular/core';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';

import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { FakepricePipe } from '../fakeprice.pipe';

const RANDOM_ID = Math.floor(Math.random() * 10);

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [PrimaryBtnComponent, FakepricePipe],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.scss',
})
export class ShoppingCardComponent implements OnInit {
  productService = inject(ProductService);
  product!: Product;
  isFetching: boolean = true;
  ngOnInit(): void {
    this.productService.getProduct(RANDOM_ID).subscribe({
      next: (res) => {
        this.product = res;
        this.isFetching = false;
      },
    });
  }
}
