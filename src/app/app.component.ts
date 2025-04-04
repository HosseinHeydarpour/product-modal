import { Component, inject, OnInit } from '@angular/core';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShoppingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'product-modal';
  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.products.subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
