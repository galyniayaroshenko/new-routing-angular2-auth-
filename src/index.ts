import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter, RouterConfig } from '@angular/router';
import { FORM_PROVIDERS } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { App, MAIN_ROUTER} from './app';

bootstrap( App, [
    provideRouter(MAIN_ROUTER),
    FORM_PROVIDERS,
    HTTP_PROVIDERS
  ]
);
