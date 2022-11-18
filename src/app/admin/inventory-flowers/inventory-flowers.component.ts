import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlowersModel } from './add-flowers.model';
@Component({
  selector: 'app-inventory-flowers',
  templateUrl: './inventory-flowers.component.html',
  styleUrls: ['./inventory-flowers.component.css']
})
export class InventoryFlowersComponent implements OnInit {

  formValue !: FormGroup;
  FlowerModelObj: FlowersModel = new FlowersModel();
  FlowerData !: any;
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
      FlowerName: [''],
      FlowerDesc: [''],
      FlowerPrice: [''],
      FlowerStock: ['']
    })

    this.getAllFlowers();
  }

  clickFlower() {
    this.formValue.reset();
    this.Add = true;
    this.Update = false;
    this.View = false;
    this.Cancel = true;
    this.ID = true;
  }

  //Add Funtion
  postAddFlowerDetails() {
    this.Add = true;
    this.Update = false;
    this.View = false;
    this.Cancel = true;

    this.FlowerModelObj.name = this.formValue.value.FlowerName;
    this.FlowerModelObj.description = this.formValue.value.FlowerDesc;
    this.FlowerModelObj.price = this.formValue.value.FlowerPrice;
    this.FlowerModelObj.stock = this.formValue.value.FlowerStock;


    this.api.postFlower(this.FlowerModelObj)
      .subscribe(res => {
        console.log(res);
        // alert("You've successfully added a new Flower.");
        this.formValue.reset();
        this.getAllFlowers();
      },
        err => {
          alert("Something went wrong")
        })
  }
  //Return All Data
  getAllFlowers() {
    this.api.getFlower()
      .subscribe(res => {
        this.FlowerData = res;
      })
  }

  //Opening Edit modal
  FlowerEdit(row: any) {
    this.Add = false;
    this.Update = true;
    this.View = false;
    this.Cancel = true;

    this.FlowerModelObj.id = row.id;
    this.formValue.controls['FlowerName'].setValue(row.name);
    this.formValue.controls['FlowerDesc'].setValue(row.description);
    this.formValue.controls['FlowerPrice'].setValue(row.price);
    this.formValue.controls['FlowerStock'].setValue(row.stock);

  }

  //Edit Function
  UpdateFlowerDetails() {
    this.Add = false;
    this.View = false;
    this.Update = true;
    this.Cancel = true;
    this.ID = false;

    this.FlowerModelObj.name = this.formValue.value.FlowerName;
    this.FlowerModelObj.description = this.formValue.value.FlowerDesc;
    this.FlowerModelObj.price = this.formValue.value.FlowerPrice;
    this.FlowerModelObj.stock = this.formValue.value.FlowerStock;

    this.api.updateFlower(this.FlowerModelObj, this.FlowerModelObj.id)
      .subscribe(res => {
        // alert("Updated Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllFlowers();
      })
  }

  //Delete Function
  deleteFlower(row: any) {
    if(confirm('Are you sure you want to delete this flower?'))
    this.api.deleteFlower(row.id)
      .subscribe(res => {
        alert('Deleted successfully!')
        this.getAllFlowers();
      },
        err => {
          alert("Something went wrong")
        })
  }

  //View Details button
  onView(row: any) {
    this.Add = false;
    this.Update = false;
    this.View = true;
    this.Cancel = false;
    this.ID = false;

    this.formValue.controls['FlowerName'].setValue(row.name);
    this.formValue.controls['FlowerDesc'].setValue(row.description);
    this.formValue.controls['FlowerPrice'].setValue(row.price);
    this.formValue.controls['FlowerStock'].setValue(row.stock);
    this.formValue.controls['id'].setValue(row.id);
  }


}
