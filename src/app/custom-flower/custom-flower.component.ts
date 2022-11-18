import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { BagService } from '../service/bag.service';

@Component({
  selector: 'app-custom-flower',
  templateUrl: './custom-flower.component.html',
  styleUrls: ['./custom-flower.component.css']
})
export class CustomFlowerComponent implements OnInit {

  public flowerList : any;
  constructor(private api : ApiService, private bag : BagService) { }

  ngOnInit(): void {
    this.api.getFlower()
    .subscribe(res=>{
      this.flowerList = res;

      this.flowerList.forEach((a:any) => {
        Object.assign(a,{quantity:1});
      });
    })
  }
  addtobag(item : any){
    this.bag.addtoBag(item);
  }
}
