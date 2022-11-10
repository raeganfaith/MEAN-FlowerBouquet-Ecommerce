import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckoutModal } from '../checkout/checkout.modal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  CheckoutModal(CheckoutModalObj: CheckoutModal) {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://localhost:3000/bouquets")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  // function for checkout

  postTransaction(data : any){
    return this.http.post<any>("http://localhost:3000/transaction", data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

  getTransaction(){
    return this.http.get<any>("http://localhost:3000/transaction")
    .pipe(map((res:any)=> {
      return res;
    }))
  }
}
