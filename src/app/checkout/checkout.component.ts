import { Component, OnInit } from '@angular/core';
import { BagService } from '../service/bag.service';
import { ApiService } from '../service/api.service';
import {FormBuilder, FormGroup } from '@angular/forms';
import { CheckoutModal } from './checkout.modal';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  formValue !: FormGroup;
  checkoutModal : CheckoutModal = new CheckoutModal();
  orderData !: any;
  public bouquets : any =[];
  public grandTotal !: number;
  order !: String;

  constructor(private bag : BagService, private api : ApiService,
    private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id : [''] ,
      CustomerName : [''],
      CustomerMobile : [''],
      CustomerAdd :[''],
      CustomerEmail : [''],
      Date : [''],
    })
    this.bag.getProducts()
    .subscribe(res=>{
      this.bouquets = res;
      this.grandTotal = this.bag.getTotalPrice();
    })

    this.getItems();
    
  }
  removeall(){
    this.bag.removeAll();
  }

  getItems(){
    this.order = this.bag.getProductNameList();
  }

  checkOut(){
    this.checkoutModal.fullName = this.formValue.value.CustomerName;
    this.checkoutModal.contact = this.formValue.value.CustomerMobile;
    this.checkoutModal.address = this.formValue.value.CustomerAdd;
    this.checkoutModal.email = this.formValue.value.CustomerEmail;
    this.checkoutModal.date = this.formValue.value.Date;
    this.checkoutModal.orders = this.order;
    this.checkoutModal.total = this.grandTotal+60;

    this.api.postOrder(this.checkoutModal)
    .subscribe(res=>{
      // alert("Transaction added");
      this.formValue.reset();
      this.removeall();
    },
    err=>{
      alert("Something went wrong.")
    })
  }
}
