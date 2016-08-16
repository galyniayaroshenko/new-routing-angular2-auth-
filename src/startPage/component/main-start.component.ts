import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, provideRouter, RouterConfig } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'start',
  directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template:`<div>Smile!</div>`
})

export class MainStartComponent {
  name = 'my test';
  constructor(public router: Router, public http: Http) {
  }
}