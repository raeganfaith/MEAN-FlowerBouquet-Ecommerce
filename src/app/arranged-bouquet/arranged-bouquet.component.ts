import { Component, OnInit } from '@angular/core';
import orderData from '../bouquet.json';
interface Bouquet {
  image: string;
  bouquetName: string;
  price: string;
  description: string;
}

@Component({
  selector: 'app-arranged-bouquet',
  templateUrl: './arranged-bouquet.component.html',
  styleUrls: ['./arranged-bouquet.component.css']
})
export class ArrangedBouquetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  bouquets:Bouquet[]=orderData;


}
