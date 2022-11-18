import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { HistoryOrders } from './history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  formValue !: FormGroup;
  historyModelObj : HistoryOrders = new HistoryOrders();
  historyData !: any;

  constructor(private formbuilder: FormBuilder,
    private api: ApiService) { }

    ngOnInit(): void {
      this.formValue = this.formbuilder.group({
        fullName : [''],
        contact : [''],
        address : [''],
        email : [''],
        date : ['']
      })
  
      this.getAllHistory();
    }
  
    getAllHistory() {
      this.api.getHistory()
        .subscribe(res=>{
          this.historyData = res;
        })
    }

}
