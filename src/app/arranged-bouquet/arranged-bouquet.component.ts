import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { BagService } from '../service/bag.service';
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

  public bouquetList : any;
  constructor(private api : ApiService, private bag : BagService) { }


  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.bouquetList = res;

      this.bouquetList.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price});
      });
    })
  }
  addtocart(item : any){
    this.bag.addtoBag(item);
    alert("Added to cart");
  }
}
