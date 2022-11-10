import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-bouquet',
  templateUrl: './add-bouquet.component.html',
  styleUrls: ['./add-bouquet.component.css']
})
export class AddBouquetComponent implements OnInit {

  formValue !: FormGroup;
  constructor(private formbuilber: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      id : [''],
      image : [''],
      bouquetName : [''],
      price : [''],
      description : ['']
    })
    // this.getAllBouquet();
  }
  // getAllBouquet() {
  //   throw new Error('Method not implemented.');
  // }


}
