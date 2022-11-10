import { Component, OnInit } from '@angular/core';
import { BagService } from '../service/bag.service';
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
  public bouquets : any =[];
  public grandTotal !: number;

  constructor(private bag : BagService,
    private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      TransacID : [''] ,
      CustomerName : [''],
      CustomerMobile : [''],
      CustomerAdd :[''],
      CustomerEmail : [''],

      OrderOptions : [''],
      Date : [''],

      Subtotal : [''],
      SF : [''],
      Total : [''],
    })
    this.bag.getProducts()
    .subscribe(res=>{
      this.bouquets = res;
      this.grandTotal = this.bag.getTotalPrice();
    })
  }

  checkOut(){
    this.checkoutModal.CustomerName = this.formValue.value.CustomerName;
    this.checkoutModal.CustomerMobile = this.formValue.value.CustomerMobile;
    this.checkoutModal.CustomerAdd = this.formValue.value.CustomerAdd;
    this.checkoutModal.CustomerEmail = this.formValue.value.CustomerEmail;

    // this.api.postTransaction(this.checkoutModal)
    // .subscribe(res=>{
    //   alert("Transaction added");
    //   this.formValue.reset();
    // },
    // err=>{
    //   alert("Something went wrong.")
    // })
  }
}
