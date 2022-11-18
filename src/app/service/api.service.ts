import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckoutModal } from '../checkout/checkout.modal';
import { BouquetModel } from '../admin/inventory-bouquet/add-bouquet.model';
import { FlowersModel } from '../admin/inventory-flowers/add-flowers.model';
import { SleevesModel } from '../admin/inventory-sleeves/add-sleeves.model';
import { TiesModel } from '../admin/inventory-ties/add-ties.model';
import { AdminOrders } from '../admin/orders/orders.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  CheckoutModal(CheckoutModalObj: CheckoutModal) {
    throw new Error('Method not implemented.');
  }

  BouquetModel(AddBouquetModelObj: BouquetModel) {
    throw new Error('Method not implemented.');
  }

  FlowerModel(AddFlowerModelObj: FlowersModel) {
    throw new Error('Method not implemented.');
  }
  SleeveModel(AddSleeveModelObj: SleevesModel) {
    throw new Error('Method not implemented.');
  }
  TieModel(AddTieModelObj: TiesModel) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any>("http://localhost:3000/bouquets")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getFlower() {
    return this.http.get<any>("http://localhost:3000/flowers")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getSleeve() {
    return this.http.get<any>("http://localhost:3000/sleeves")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getTie() {
    return this.http.get<any>("http://localhost:3000/ties")
      .pipe(map((res: any) => {
        return res;
      }))
  }


  //admin bouquet function
  postBouquet(data: any) {
    return this.http.post<any>("http://localhost:3000/bouquets", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getBouquet() {
    return this.http.get<any>("http://localhost:3000/bouquets")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateBouquet(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/bouquets/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteBouquet(id: number) {
    return this.http.delete<any>("http://localhost:3000/Bouquets/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  //admin flower function
  postFlower(data: any) {
    return this.http.post<any>("http://localhost:3000/flowers", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  updateFlower(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/flowers/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteFlower(id: number) {
    return this.http.delete<any>("http://localhost:3000/flowers/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  //admin sleeve function
  postSleeve(data: any) {
    return this.http.post<any>("http://localhost:3000/sleeves", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateSleeve(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/sleeves/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteSleeve(id: number) {
    return this.http.delete<any>("http://localhost:3000/sleeves/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

   //admin tie function
   postTie(data: any) {
    return this.http.post<any>("http://localhost:3000/ties", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateTie(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/ties/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteTie(id: number) {
    return this.http.delete<any>("http://localhost:3000/ties/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // admin orders
  postOrder(data: any) {
    return this.http.post<any>("http://localhost:3000/order-details", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getOrder() {
    return this.http.get<any>("http://localhost:3000/order-details/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateOrder(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/order-details/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateStatus(data: String, id: number) {
    return this.http.put<any>("http://localhost:3000/order-details/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // admin history orders / purchases
  postHistory(data: any) {
    return this.http.post<any>("http://localhost:3000/history", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getHistory() {
    return this.http.get<any>("http://localhost:3000/history/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  onSubmit(data: any) {
    return this.http.post<any>("http://localhost:3000/order-summary", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
