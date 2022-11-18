import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  public bagItemList : any =[]
  public bouquetList = new BehaviorSubject<any>([]);
  public name : any;

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

  getProductNameList(){
    let name = '';
    this.bagItemList.map((a:any)=>{
      name = name + (a.name + ', ');
    })
    return name;
  }

  getTotalPrice(){
    let grandTotal = 0;
    this.bagItemList.map((a:any)=>{
      grandTotal += parseInt(a.price);
    })
    return grandTotal;
  }
  removeBagItem(bouquet : any){
    this.bagItemList.map((a:any, index:any)=>{
      if(a.id === bouquet.id){
        this.bagItemList.splice(index,1);
        this.bouquetList.next(this.bagItemList);
      }
    })
  }
  removeAll(){
    this.bagItemList = []
    this.bouquetList.next(this.bagItemList);
  }
}
