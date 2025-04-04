import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appPrimaryBtn]',
  standalone: true,
  imports: [],
  templateUrl: './primary-btn.component.html',
  styleUrl: './primary-btn.component.scss',
  host: {
    class: 'btn-primary',
  },
})
export class PrimaryBtnComponent {
  label = input.required<string>();
}
