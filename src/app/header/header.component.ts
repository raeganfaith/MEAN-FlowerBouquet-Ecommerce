import { Component, OnInit } from '@angular/core';
import { BagService } from '../service/bag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private bag : BagService) { }

  ngOnInit(): void {
    this.bag.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
