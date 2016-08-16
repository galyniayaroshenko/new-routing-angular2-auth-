import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, provideRouter, RouterConfig  } from '@angular/router';
import { } from '@angular/router';

import { Signup } from './startPage/signup/signup.component';
import { Home} from './startPage/signup/home/home.component';
import { Login} from './startPage/login/login.component';
import { StartPage} from './startPage/start-page.component';

const template = require('./app.html');

@Component({
  selector: 'auth-app',
  template: template,
  directives: [ ROUTER_DIRECTIVES ]
})

export class App {
  constructor(public router: Router) {}
}

export const MAIN_ROUTER: RouterConfig = [
  { path: '',  component:  StartPage },
  { path: 'startPage',  component: StartPage, 
    children: [
      { path: 'login',  component: Login }
    ]
  },
  { path: 'startPage/login/home', component: Home},
  { path: 'signup', component: Signup},
  { path: '**',     component: StartPage }
];



