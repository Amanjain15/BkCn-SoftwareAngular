import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	public prodForm = this.fb.group({
	model_no: ["", Validators.required],
	type: ["", Validators.required],
	quantity: ["", Validators.required],
	pkg_quantity: ["", Validators.required],
	});
	constructor(public fb: FormBuilder,public http : Http) {
	}

	ngOnInit() {
	}
	
	submit(prodForm) {
	    console.log(this.prodForm.value);
	    let serializedForm = JSON.stringify(this.prodForm.value);
	    this.http.post("http://127.0.0.1:8000/add_product/",serializedForm)
	          .subscribe(response => {
	            console.log(response)
	            if (response['success']){
	            	console.log("QR GENErated")
	            }
	          })
	}
}
