import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  public bagItemList : any =[]
  public bouquetList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.bouquetList.asObservable();
  }
  setProduct(bouquet : any){
    this.bagItemList.push(...bouquet);
    this.bouquetList.next(bouquet);
  }
  addtoBag(bouquet : any){
    this.bagItemList.push(bouquet);
    this.bouquetList.next(this.bagItemList);
    this.getTotalPrice();
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.bagItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeBagItem(bouquet : any){
    this.bagItemList.map((a:any, index:any)=>{
      if(a.id === bouquet.id){
        this.bagItemList.splice(index,1);
      }
    })
  }
}
