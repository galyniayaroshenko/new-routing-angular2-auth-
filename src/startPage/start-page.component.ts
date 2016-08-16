import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, provideRouter, RouterConfig } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

import { MainStartComponent} from './component/main-start.component';


@Component({
  selector: 'start-page',
  directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, MainStartComponent ],
  templateUrl: './src/startPage/view/start-page.html',
  styles: [ './src/startPage/view/start-page.css' ]
})

export class StartPage {
  name = 'my test';
  constructor(public http: Http) {
  }
}

// export const  START_PAGE_ROUTER: RouterConfig = [
//   { path: '/signup',  component: Signup }
// ];
