import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {}

  public getProducts() {
  	return this.http.get<any>('products/');
  }

  
}
