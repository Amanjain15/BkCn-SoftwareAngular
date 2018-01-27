import { Component, OnInit } from '@angular/core';
import { ProductService } from './../_services/index'


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public headerRow: Array<any> = [];
    public productList: Array<any> = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.populate();
      this.headerRow = [ 'S.No', 'Model No', 'Type'];
  }

  populate(){
    this.productService.getProducts().subscribe(response =>{
      this.productList = response.products;
    });  
  }

}
