import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'manzana',
        price: 10.5,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        title: 'naranja',
        price: 5.5,
        quantity: 5,
        completed: true
      },
      {
        id: 2,
        title: 'pan',
        price: 3.5,
        quantity: 7,
        completed: false
      }
    ];
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(items => items.id != item.id);
  }
}
