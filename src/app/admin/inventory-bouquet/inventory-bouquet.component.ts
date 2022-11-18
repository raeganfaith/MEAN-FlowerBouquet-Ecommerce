import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BouquetModel } from './add-bouquet.model';

@Component({
  selector: 'app-inventory-bouquet',
  templateUrl: './inventory-bouquet.component.html',
  styleUrls: ['./inventory-bouquet.component.css']
})
export class InventoryBouquetComponent implements OnInit {

  formValue !: FormGroup;
  BouquetModelObj: BouquetModel = new BouquetModel();
  BouquetData !: any;
  Add !: boolean;
  Update !: boolean;
  View!: boolean;
  Cancel!: boolean;
  ID !: boolean;

  constructor(private formbuilber: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      id: [''],
      BouquetName: [''],
      BouquetDesc: [''],
      BouquetPrice: [''],
      BouquetStock: ['']
    })

    this.getAllBouquet();
  }


  clickBouquet() {
    this.formValue.reset();
    this.Add = true;
    this.Update = false;
    this.View = false;
    this.Cancel = true;
    this.ID = true;
  }

  postAddBouquetDetails() {
    this.Add = true;
    this.Update = false;
    this.View = false;
    this.Cancel = true;
    this.BouquetModelObj.name = this.formValue.value.BouquetName;
    this.BouquetModelObj.description = this.formValue.value.BouquetDesc;
    this.BouquetModelObj.price = this.formValue.value.BouquetPrice;
    this.BouquetModelObj.stock = this.formValue.value.BouquetStock;


    this.api.postBouquet(this.BouquetModelObj)
      .subscribe(res => {
        console.log(res);
        // alert("You've successfully added a new bouquet.");
        this.formValue.reset();
        this.getAllBouquet();
      },
        err => {
          alert("Something went wrong")
        })
  }

  getAllBouquet() {
    this.api.getBouquet()
      .subscribe(res => {
        this.BouquetData = res;
      })
  }

  BouquetEdit(row: any) {

    this.Add = false;
    this.Update = true;
    this.View = false;
    this.Cancel = true;

    this.BouquetModelObj.id = row.id;
    this.formValue.controls['BouquetName'].setValue(row.name);
    this.formValue.controls['BouquetDesc'].setValue(row.description);
    this.formValue.controls['BouquetPrice'].setValue(row.price);
    this.formValue.controls['BouquetStock'].setValue(row.stock);

  }

  UpdateBouquetDetails() {

    this.Add = false;
    this.View = false;
    this.Update = true;
    this.Cancel = true;

    this.BouquetModelObj.name = this.formValue.value.BouquetName;
    this.BouquetModelObj.description = this.formValue.value.BouquetDesc;
    this.BouquetModelObj.price = this.formValue.value.BouquetPrice;
    this.BouquetModelObj.stock = this.formValue.value.BouquetStock;


    this.api.updateBouquet(this.BouquetModelObj, this.BouquetModelObj.id)
      .subscribe(res => {
        // alert("Updated Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllBouquet();
      })
  }

  deleteBouquet(row: any) {
    if(confirm('Are you sure you want to delete this bouquet?'))
    this.api.deleteBouquet(row.id)
      .subscribe(res => {
        alert('Deleted successfully!')
        this.getAllBouquet();
      },
        err => {
          alert("Something went wrong")
        })
  }


  onView(row: any) {
    this.Add = false;
    this.Update = false;
    this.View = true;
    this.Cancel = false;
    this.ID = false;

    this.formValue.controls['BouquetName'].setValue(row.name);
    this.formValue.controls['BouquetDesc'].setValue(row.description);
    this.formValue.controls['BouquetPrice'].setValue(row.price);
    this.formValue.controls['BouquetStock'].setValue(row.stock);
    this.formValue.controls['id'].setValue(row.id);


  }
}
