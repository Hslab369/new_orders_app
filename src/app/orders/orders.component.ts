import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  jsonString = `{
    "name":"Soham",
    "itemlist":[
      {"itemName":"Mobile","itemPrice":25000},
      {"itemName":"Laptop","itemPrice":75000},
      {"itemName":"MacBook","itemPrice":150000}
    ],
    "totalItems":3,
    "totalPrice":250000
  }`;

  order = JSON.parse(this.jsonString);

  itemList = this.order.itemlist;
  totalItems = this.order.totalItems;
  totalPrice = this.order.totalPrice;

  updateData(custName: string, itemct: number, totalprice: number) {
    this.order.name = custName;

    // component state is the source of truth
    this.totalItems = itemct;
    this.totalPrice = totalprice;

    // mirror to json
    this.order.totalItems = this.totalItems;
    this.order.totalPrice = this.totalPrice;
  }

  addItem(itemName: string, itemPrice: number) {
    this.itemList.push({ itemName, itemPrice });

    // keep manual increment logic
    this.totalItems = this.itemList.length;
    this.totalPrice += itemPrice;

    // mirror to json
    this.order.totalItems = this.totalItems;
    this.order.totalPrice = this.totalPrice;
  }

}
