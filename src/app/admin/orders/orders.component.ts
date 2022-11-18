import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { AdminOrders } from './orders.model';
import { HistoryOrders } from '../history/history.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  formValue !: FormGroup;
  orderModelObj: AdminOrders = new AdminOrders();
  historyOModelObj: HistoryOrders = new HistoryOrders();
  orderData !: any;
  status !: any;

  constructor(private formbuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      OrderID: [''],
      fullName: [''],
      contact: [''],
      address: [''],
      email: [''],
      orders: [''],
      date: [''],
      status: [''],
      total: ['']
    })

    this.getAllOrders();
  }

  getAllOrders() {
    this.api.getOrder()
      .subscribe(res => {
        this.orderData = res;
      })
  }

  onView(row: any) {
    this.formValue.controls['OrderID'].setValue(row.id);
    this.formValue.controls['fullName'].setValue(row.fullName);
    this.formValue.controls['contact'].setValue(row.contact);
    this.formValue.controls['address'].setValue(row.address);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['orders'].setValue(row.orders);
    this.formValue.controls['date'].setValue(row.date);
    this.formValue.controls['total'].setValue(row.total);
  }

  statusPending() {
    this.status = "Pending";
  }

  statusProcessing() {
    this.status = "Processing";
  }

  statusReject() {
    this.status = "Reject";
  }

  statusCompleted() {
    this.status = "Completed";
  }

  editOrders(row: any) {
    this.orderModelObj.id = row.id;
    this.formValue.controls['fullName'].setValue(row.fullName);
    this.formValue.controls['contact'].setValue(row.contact);
    this.formValue.controls['address'].setValue(row.address);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['status'].setValue(row.status);
    this.formValue.controls['orders'].setValue(row.orders);
    this.formValue.controls['date'].setValue(row.date);
    this.formValue.controls['total'].setValue(row.total);
    this.formValue.controls['status'].setValue(row.status);
  }

  updateOrderD() {
    this.orderModelObj.fullName = this.formValue.value.fullName;
    this.orderModelObj.contact = this.formValue.value.contact;
    this.orderModelObj.address = this.formValue.value.address;
    this.orderModelObj.email = this.formValue.value.email;
    this.orderModelObj.orders = this.formValue.value.orders;
    this.orderModelObj.date = this.formValue.value.date;
    this.orderModelObj.total = this.formValue.value.total;
    this.orderModelObj.status = this.status;

    this.api.updateOrder(this.orderModelObj, this.orderModelObj.id)
    .subscribe(res => {
      // alert("Updated Successfully")
      this.getAllOrders();
    },
      err => {
        alert("Something went wrong")
      })

    if (this.status==="Completed"){
      this.historyOModelObj.fullName=this.orderModelObj.fullName;
      this.historyOModelObj.contact=this.orderModelObj.contact;
      this.historyOModelObj.address=this.orderModelObj.address;
      this.historyOModelObj.email=this.orderModelObj.email;
      this.historyOModelObj.date=this.orderModelObj.date;

      this.api.postHistory(this.historyOModelObj)
      .subscribe(res => {
        alert("Successfully moved to history.");
      })
    }

  }
}
