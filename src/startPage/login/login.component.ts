import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

import {Control, ControlGroup, FormBuilder, Validators} from '@angular/common';

const styles   = require('./view/login.css');
const template = require('./view/login.html');

@Component({
  selector: 'login',
  directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES],
  template: template,
  styles: [ styles ]
})
export class Login {
  constructor(public router: Router, public http: Http) {}
  
  // login(event, email, password) {
  //   event.preventDefault();
  //   let body = JSON.stringify({ email, password });
  //   console.log(body);
  //   this.http.post('http://localhost:3000/api/v1/auth/loginByEmail', body, { headers: contentHeaders })
  //   // AuthFactory.login(body)
  //     .subscribe(
  //       response => {
  //         if (response.json().status.success == null) {
  //           alert('email address or password you entered is not correct');
  //           console.log('response.json().status.success', response.json().status.success);
  //         } else {
  //           console.log(response.json());
  //           localStorage.setItem('accessToken', response.json().user.accessToken);
  //           this.router.navigate(['/home']);
  //           console.log(localStorage.getItem('accessToken'));
  //         }
  //       },
  //       error => {
  //         alert(error.text());
  //         console.log(error.text());
  //       }
  //     );
  // }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['/signup']);
  }
}
