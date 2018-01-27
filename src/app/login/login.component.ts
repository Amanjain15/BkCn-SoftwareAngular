import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component ({
	selector: 'login',
	templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit  {
	model: any = {}
	errors: any = {}

	constructor(
		private http: Http,
		private router: Router
	) {}
		
	ngOnInit() {
		if (this.http.get('/isLoggedIn')) 
			this.router.navigate(['/dashboard'])
	}

	dataAltered() {
		this.errors = {}
	}

	login() {
		this.http.post(this.model.email, this.model.password).subscribe((response: any) => {
			
			if (response.success) {

				this.router.navigate(['/dashboard'])
			} else {
				console.log('Login Error');
			}
		}, (error: any) => {
			console.log('API Login Error: ' + error);
		})
	}
}