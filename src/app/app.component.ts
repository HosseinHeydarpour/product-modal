import { Component } from '@angular/core';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShoppingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'product-modal';
}
