import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { BagService } from '../service/bag.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public bouquets : any =[];
  public grandTotal !: number;
  constructor(private bag : BagService, private api : ApiService) { }

  ngOnInit(): void {
    this.bag.getProducts()
    .subscribe(res=>{
      this.bouquets = res;
      this.grandTotal = this.bag.getTotalPrice();
    })
  }
  removeItem(item : any){
    this.bag.removeBagItem(item);
  }
}
