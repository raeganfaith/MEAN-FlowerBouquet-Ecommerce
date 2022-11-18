import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TiesModel } from './add-ties.model';

@Component({
  selector: 'app-inventory-ties',
  templateUrl: './inventory-ties.component.html',
  styleUrls: ['./inventory-ties.component.css']
})
export class InventoryTiesComponent implements OnInit {
  
  formValue !: FormGroup;
  TiesModelObj: TiesModel = new TiesModel();
  TiesData !: any;
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
      TieName: [''],
      TieDescription: [''],
      TieStock: [''],
      TiePrice: [''],
    })

    this.getAllTies();
  }

  clickTie() {
    this.formValue.reset();
    this.Add = true;
    this.Update = false;
    this.View = false;
    this.Cancel = true;
    this.ID = true;
  }

  //Add Funtion
  postAddTieDetails() {
    this.Add = true;
    this.Update = false;
    this.View = false;
    this.Cancel = true;

    this.TiesModelObj.name = this.formValue.value.TieName;
    this.TiesModelObj.description = this.formValue.value.TieDescription;
    this.TiesModelObj.stock = this.formValue.value.TieStock;
    this.TiesModelObj.price = this.formValue.value.TiePrice;


    this.api.postTie(this.TiesModelObj)
      .subscribe(res => {
        console.log(res);
        alert("You've successfully added a new Flower.");
        this.formValue.reset();
        this.getAllTies();
      },
        err => {
          alert("Something went wrong")
        })
  }
  //Return All Data
  getAllTies() {
    this.api.getTie()
      .subscribe(res => {
        this.TiesData = res;
      })
  }

  //Opening Edit modal
  TieEdit(row: any) {
    this.Add = false;
    this.Update = true;
    this.View = false;
    this.Cancel = true;

    this.TiesModelObj.id = row.id;
    this.formValue.controls['TieName'].setValue(row.name);
    this.formValue.controls['TieDescription'].setValue(row.description);
    this.formValue.controls['TieStock'].setValue(row.stock);
    this.formValue.controls['TiePrice'].setValue(row.price);

  }

  //Edit Function
  UpdateTieDetails() {
    this.Add = false;
    this.View = false;
    this.Update = true;
    this.Cancel = true;
    this.ID = false;

    this.TiesModelObj.name = this.formValue.value.TieName;
    this.TiesModelObj.description = this.formValue.value.TieDescription;
    this.TiesModelObj.stock = this.formValue.value.TieStock;
    this.TiesModelObj.price = this.formValue.value.TiePrice;

    this.api.updateTie(this.TiesModelObj, this.TiesModelObj.id)
      .subscribe(res => {
        alert("Updated Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllTies();
      })
  }

  //Delete Function
  deleteTie(row: any) {
    this.api.deleteTie(row.id)
      .subscribe(res => {
        alert("You've successfully deleted a flower.");

        this.getAllTies();
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

    this.formValue.controls['TieName'].setValue(row.name);
    this.formValue.controls['TieDescription'].setValue(row.description);
    this.formValue.controls['TieStock'].setValue(row.stock);
    this.formValue.controls['TiePrice'].setValue(row.price);
    this.formValue.controls['id'].setValue(row.id);
  }

}
