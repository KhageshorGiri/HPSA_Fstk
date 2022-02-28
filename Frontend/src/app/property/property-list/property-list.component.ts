import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id":1,
      "Name": "The Fold house",
      "Type": "Place",
      "Price": 12350
    },
    {
      "Id":2,
      "Name": "The Gold house",
      "Type": "House",
      "Price": 15650
    },
    {
      "Id":3,
      "Name": "The Dimond house",
      "Type": "Place",
      "Price": 67800
    },
    {
      "Id":4,
      "Name": "The Opera house",
      "Type": "Resident",
      "Price": 14350
    },
    {
      "Id":5,
      "Name": "The Rocking Place",
      "Type": "Place",
      "Price": 133550
    },
    {
      "Id":6,
      "Name": "Red house",
      "Type": "Place",
      "Price": 188350
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
