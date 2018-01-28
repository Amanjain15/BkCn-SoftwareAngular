import { Component, OnInit } from '@angular/core';
import { ProductService } from './../_services/index'
// import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public headerRow: Array<any> = [];
    public productList: Array<any> = [];
    url = "http://127.0.0.1:8000/product";
  constructor(private http : Http) { }

  ngOnInit() {
      this.populate();
      this.headerRow = [ 'S.No', 'Model No', 'Type'];
  }

  populate(){
    this.http.get("http://127.0.0.1:8000/product/")
          .subscribe(response => {
            // console.log(response)
            this.productList=response['product_list'];
          })

  }
  
}
