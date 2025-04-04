import { Component } from '@angular/core';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [PrimaryBtnComponent],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.scss',
})
export class ShoppingCardComponent {}
