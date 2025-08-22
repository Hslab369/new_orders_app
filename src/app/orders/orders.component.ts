import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  sharedService = new SharedServiceService();

  // Assign values from the shared service
  name = this.sharedService.order.name;
  itemList = this.sharedService.itemList;
  totalItems = this.sharedService.totalItems;
  totalPrice = this.sharedService.totalPrice;


  updateData(custName: string, itemct: number, totalprice: number) {
    this.sharedService.updateData(custName, itemct, totalprice);
  }

  addItem(itemName: string, itemPrice: number) {
    this.sharedService.addItem(itemName, itemPrice);
  }

}
