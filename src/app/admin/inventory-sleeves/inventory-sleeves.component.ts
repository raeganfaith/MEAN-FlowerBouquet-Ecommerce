import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SleevesModel } from './add-sleeves.model';

@Component({
  selector: 'app-inventory-sleeves',
  templateUrl: './inventory-sleeves.component.html',
  styleUrls: ['./inventory-sleeves.component.css']
})
export class InventorySleevesComponent implements OnInit {

  formValue !: FormGroup;
  SleevesModelObj: SleevesModel = new SleevesModel();
  SleevesData !: any;
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
      SleeveName: [''],
      SleeveDescription: [''],
      SleeveStock: [''],
      SleevePrice: [''],
    })

    this.getAllSleeves();
  }

  
  clickSleeve() {
    this.formValue.reset();
    this.Add = true;
    this.Update = false;
    this.View = false;
    this.Cancel = true;
    this.ID = true;
  }

  //Add Funtion
  postAddSleeveDetails() {
    this.Add = true;
    this.Update = false;
    this.View = false;
    this.Cancel = true;

    this.SleevesModelObj.name = this.formValue.value.SleeveName;
    this.SleevesModelObj.description = this.formValue.value.SleeveDescription;
    this.SleevesModelObj.stock = this.formValue.value.SleeveStock;
    this.SleevesModelObj.price = this.formValue.value.SleevePrice;


    this.api.postSleeve(this.SleevesModelObj)
      .subscribe(res => {
        console.log(res);
        alert("You've successfully added a new Flower.");
        this.formValue.reset();
        this.getAllSleeves();
      },
        err => {
          alert("Something went wrong")
        })
  }
  //Return All Data
  getAllSleeves() {
    this.api.getSleeve()
      .subscribe(res => {
        this.SleevesData = res;
      })
  }

  //Opening Edit modal
  SleeveEdit(row: any) {
    this.Add = false;
    this.Update = true;
    this.View = false;
    this.Cancel = true;

    this.SleevesModelObj.id = row.id;
    this.formValue.controls['SleeveName'].setValue(row.name);
    this.formValue.controls['SleeveDescription'].setValue(row.description);
    this.formValue.controls['SleeveStock'].setValue(row.stock);
    this.formValue.controls['SleevePrice'].setValue(row.price);

  }

  //Edit Function
  UpdateSleeveDetails() {
    this.Add = false;
    this.View = false;
    this.Update = true;
    this.Cancel = true;
    this.ID = false;

    this.SleevesModelObj.name = this.formValue.value.SleeveName;
    this.SleevesModelObj.description = this.formValue.value.SleeveDescription;
    this.SleevesModelObj.stock = this.formValue.value.SleeveStock;
    this.SleevesModelObj.price = this.formValue.value.SleevePrice;

    this.api.updateSleeve(this.SleevesModelObj, this.SleevesModelObj.id)
      .subscribe(res => {
        alert("Updated Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllSleeves();
      })
  }

  //Delete Function
  deleteSleeve(row: any) {
    this.api.deleteSleeve(row.id)
      .subscribe(res => {
        alert("You've successfully deleted a flower.");

        this.getAllSleeves();
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

    this.formValue.controls['SleeveName'].setValue(row.name);
    this.formValue.controls['SleeveDescription'].setValue(row.description);
    this.formValue.controls['SleeveStock'].setValue(row.stock);
    this.formValue.controls['SleevePrice'].setValue(row.price);
    this.formValue.controls['id'].setValue(row.id);
  }


}
