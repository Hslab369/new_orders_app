import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {

  @Input() itemName: string;
  @Input() itemPrice: number;
  @Input() name: string;
}
