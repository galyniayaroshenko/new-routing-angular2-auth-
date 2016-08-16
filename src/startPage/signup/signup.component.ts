import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES} from '@angular/common';
import { Http } from '@angular/http';


import {Control, ControlGroup, FormBuilder, Validators} from '@angular/common';

const styles   = require('./view/signup.css');
const template = require('./view/signup.html');

@Component({
  selector: 'signup',
  directives: [ CORE_DIRECTIVES,  ROUTER_DIRECTIVES],
  template: template,
  styles: [ styles ]
})
export class Signup {
  form: ControlGroup;
  
  constructor(public router: Router, public http: Http) {}

  signup(event, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ email, password });
    console.log('body', body);
    this.http.post('http://localhost:3000/api/v1/users', body)
    // AuthFactory.save(body)
      .subscribe(
        response => {

          // if (response.json().status.success == null ) {
          //   console.log('response.json().status.success', response.json().status.success);
          //   alert('user exists, please input another email');
          // } else {
          //  this.router.navigate(['/login']);
          //   console.log("cool");
          //   console.log('response.json().status.success', response.json().status.success);
          //   console.log('response.json()', response.json());
          //   alert('you register');
          // }

           if (response.json().status == 'OK' ) {
             alert('you register');
             this.router.navigate(['/login']);
          } else if (response.json().status == "ERROR:target" && response.json().data.firstName == "To short" ) {
              alert('To short firstName');
          } else if (response.json().status == "ERROR:target" && response.json().data.email == "Invalid email") {
              alert('Invalid email');
          }

        },
        error => {
          alert(error.text());
          console.log(error.text());
          console.log("bad");
        }
      );
  }
  
  login(event) {
    event.preventDefault();
    this.router.navigate(['/login']);
  }

}
