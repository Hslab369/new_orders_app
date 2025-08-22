import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  constructor() { }

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

    this.totalItems = itemct;
    this.totalPrice = totalprice;

    // mirror to json
    this.order.totalItems = this.totalItems;
    this.order.totalPrice = this.totalPrice;
  }

  addItem(itemName: string, itemPrice: number) {
    this.itemList.push({ itemName, itemPrice });

    // manual increment logic
    this.totalItems = this.itemList.length;
    this.totalPrice += itemPrice;

    // mirror to json
    this.order.totalItems = this.totalItems;
    this.order.totalPrice = this.totalPrice;
  }
}
