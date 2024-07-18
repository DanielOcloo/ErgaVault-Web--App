import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button-with-icon',
  templateUrl: './primary-button-with-icon.component.html',
  styleUrl: './primary-button-with-icon.component.css'
})
export class PrimaryButtonWithIconComponent {
  @Input() link: string = '';
  @Input() text: string = 'Button';
  @Input() imageUrl: string = '';
}
