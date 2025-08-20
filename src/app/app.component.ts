import { Component } from '@angular/core';
import { OrdersComponent } from './orders/orders.component';

@Component({
  selector: 'app-root',
  imports: [OrdersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myOrderApp';


}
